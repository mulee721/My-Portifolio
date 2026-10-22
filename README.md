# Mulee Portfolio

The contact form is handled by the Node server in `server.js`; it sends an email notification and, when `MONGODB_URI` is configured, stores each message in MongoDB. It cannot work from a static-only deployment.

## Run locally

1. Optional but recommended: create a free MongoDB Atlas cluster, database user, and a database named `mulee_portfolio`. In Atlas Network Access, allow your deployment server's IP address.
2. Copy `.env.example` to `.env` and set the SMTP values. Add `MONGODB_URI` to retain a searchable database of contact messages. For Gmail, turn on 2-Step Verification and create a Google App Password for `SMTP_PASS`.
2. Run `npm start`.
3. Run `npm start`, then open `http://localhost:3000/health`. It should return `{"status":"ok","mailConfigured":true,"databaseConnected":true}`.

## Deploy

Deploy this as a Node.js service (for example, Render, Railway, or a VPS), not GitHub Pages or another static-only host. Set the SMTP and MongoDB variables in the host's encrypted environment-variable settings; never upload `.env`, the Gmail app password, or MongoDB credentials. Set the start command to `npm start` and use the host-provided `PORT` variable.
