const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const http = require('http');
const fs = require('fs');
const { URL } = require('url');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailTo = process.env.MAIL_TO;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const mongoUri = process.env.MONGODB_URI;
const smtpAuthIsValid = Boolean(smtpUser) === Boolean(smtpPass);
const smtpPortIsValid = Number.isInteger(smtpPort) && smtpPort > 0 && smtpPort <= 65535;
const contactRateLimit = new Map();
const CONTACT_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_LIMIT_MAX_REQUESTS = 5;
let mongoReady = false;
let mongoError = null;

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, maxlength: 254, lowercase: true },
  subject: { type: String, required: true, trim: true, maxlength: 160 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now, index: true },
  emailDeliveredAt: { type: Date, default: null }
}, { versionKey: false });
const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
const mailTransport = smtpHost && mailTo && smtpAuthIsValid && smtpPortIsValid
  ? nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    disableFileAccess: true,
    disableUrlAccess: true,
    ...(smtpUser ? { auth: { user: smtpUser, pass: smtpPass } } : {})
  })
  : null;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function send(res, statusCode, body, headers = {}) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    ...headers
  });
  res.end(JSON.stringify(body));
}

function readBody(req, maxBytes = 16 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let tooLarge = false;
    req.on('data', (chunk) => {
      if (tooLarge) return;
      size += chunk.length;
      if (size > maxBytes) {
        tooLarge = true;
        chunks.length = 0;
        const error = new Error('Request body is too large.');
        error.statusCode = 413;
        reject(error);
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function clientAddress(req) {
  return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(req) {
  const now = Date.now();
  const key = clientAddress(req);
  const attempts = (contactRateLimit.get(key) || []).filter((time) => now - time < CONTACT_LIMIT_WINDOW_MS);
  attempts.push(now);
  contactRateLimit.set(key, attempts);
  return attempts.length > CONTACT_LIMIT_MAX_REQUESTS;
}

async function handleContact(req, res) {
  const rawBody = await readBody(req, 64 * 1024);
  const contentType = req.headers['content-type'] || '';
  let payload = {};

  if (contentType.includes('application/json') && rawBody) {
    try {
      payload = JSON.parse(rawBody);
    } catch {
      send(res, 400, { success: false, message: 'Invalid JSON payload.' });
      return;
    }
  } else {
    const params = new URLSearchParams(rawBody);
    payload = Object.fromEntries(params.entries());
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    send(res, 400, { success: false, message: 'Invalid contact form payload.' });
    return;
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);
  const website = sanitize(payload.website);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {};

  if (!name || name.length > 120) errors.name = 'Enter your name (up to 120 characters).';
  if (!emailPattern.test(email) || email.length > 254) errors.email = 'Enter a valid email address.';
  if (subject.length < 5 || subject.length > 160) errors.subject = 'Subject must be 5-160 characters.';
  if (message.length < 20 || message.length > 5000) errors.message = 'Message must be 20-5000 characters.';

  if (Object.keys(errors).length) {
    send(res, 422, { success: false, errors });
    return;
  }

  // Bots commonly populate hidden fields that real visitors never see.
  if (website) {
    send(res, 200, { success: true, message: 'Message sent successfully.' });
    return;
  }

  if (isRateLimited(req)) {
    send(res, 429, {
      success: false,
      message: 'Too many messages from this connection. Please try again in 15 minutes.'
    });
    return;
  }

  if (!mailTransport) {
    send(res, 503, {
      success: false,
      message: 'Email delivery is not configured. Please email mulugetadaba719@gmail.com directly.'
    });
    return;
  }

  if (mongoUri && !mongoReady) {
    send(res, 503, {
      success: false,
      message: 'Message storage is temporarily unavailable. Please try again shortly.'
    });
    return;
  }

  let savedMessage = null;
  if (mongoReady) {
    try {
      savedMessage = await ContactMessage.create({ name, email, subject, message });
    } catch (error) {
      console.error('Contact message could not be saved:', error.message);
      send(res, 503, {
        success: false,
        message: 'Message storage is temporarily unavailable. Please try again shortly.'
      });
      return;
    }
  }

  try {
    await mailTransport.sendMail({
      from: {
        name: 'Mulee Portfolio',
        address: process.env.SMTP_FROM || smtpUser || mailTo
      },
      to: mailTo,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    });
    if (savedMessage) {
      savedMessage.emailDeliveredAt = new Date();
      await savedMessage.save();
    }
  } catch (error) {
    console.error('Contact email delivery failed:', error.message);
    send(res, 502, {
      success: false,
      message: 'Email delivery failed. Please email mulugetadaba719@gmail.com directly.'
    });
    return;
  }

  send(res, 200, {
    success: true,
    message: "Message sent successfully! I'll get back to you within 24-48 hours."
  });
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Max-Age': '86400'
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && (pathname === '/api/contact' || pathname === '/contact')) {
    try {
      await handleContact(req, res);
    } catch (error) {
      console.error('Contact request failed:', error.message);
      if (!res.headersSent) {
        send(res, error.statusCode || 500, {
          success: false,
          message: 'Failed to process your message. Please email mulugetadaba719@gmail.com directly.'
        });
      }
    }
    return;
  }

  if (req.method === 'GET' && pathname === '/health') {
    const isHealthy = Boolean(mailTransport) && (!mongoUri || mongoReady);
    send(res, isHealthy ? 200 : 503, {
      status: isHealthy ? 'ok' : 'unavailable',
      mailConfigured: Boolean(mailTransport),
      databaseConnected: mongoReady
    });
    return;
  }

  if (req.method === 'GET' && pathname === '/api/messages') {
    if (!mongoReady) {
      send(res, 503, { success: false, message: 'Database is not connected.' });
      return;
    }
    try {
      const messages = await ContactMessage.find().sort({ createdAt: -1 }).lean();
      send(res, 200, { success: true, count: messages.length, messages });
    } catch (error) {
      console.error('Failed to fetch messages:', error.message);
      send(res, 500, { success: false, message: 'Failed to retrieve messages.' });
    }
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method not allowed');
    return;
  }

  const safePath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      const fallback = path.join(rootDir, 'index.html');
      serveFile(res, fallback);
      return;
    }

    serveFile(res, filePath);
  });
});

server.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
  if (!mailTransport) {
    console.warn('Contact delivery is disabled: configure SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_TO.');
    return;
  }

  mailTransport.verify()
    .then(() => console.log('Contact email service is ready.'))
    .catch((error) => console.error(`Contact email service verification failed: ${error.message}`));

  if (!mongoUri) {
    console.warn('Contact storage is disabled: configure MONGODB_URI.');
    return;
  }

  mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 })
    .then(() => {
      mongoReady = true;
      mongoError = null;
      console.log('Contact database is ready.');
    })
    .catch((error) => {
      mongoReady = false;
      mongoError = error;
      console.error(`Contact database connection failed: ${error.message}`);
    });
});

mongoose.connection.on('disconnected', () => {
  mongoReady = false;
});

mongoose.connection.on('error', (error) => {
  mongoReady = false;
  mongoError = error;
});
