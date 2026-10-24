const body = document.body;

const navToggle = document.querySelector('.nav-toggle');

const navMenu = document.querySelector('.nav-menu');

const themeToggle = document.querySelector('.theme-toggle');

const typedText = document.getElementById('typed-text');

const revealElements = document.querySelectorAll('.reveal');

const filterButtons = document.querySelectorAll('.filter-btn');

const skillCards = document.querySelectorAll('.skill-card');

const copyButtons = document.querySelectorAll('.copy-button');

const languageButtons = document.querySelectorAll('.lang-btn');
const languageSelect = document.getElementById('language-select');

const contactForm = document.getElementById('contact-form');

const formStatus = document.getElementById('form-status');

const currentYear = document.getElementById('current-year');

const resumeDownloads = document.querySelectorAll('.resume-download');

const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const certificateCards = document.querySelectorAll('[data-certificate-card]');

const certificateDialog = document.getElementById('certificate-dialog');

const certificateDialogImage = document.getElementById('certificate-dialog-image');

const certificateDialogTitle = document.getElementById('certificate-dialog-title');

const certificateDialogFullSize = document.getElementById('certificate-dialog-full-size');

const contactCopies = {

  email: 'mulugetadaba719\@gmail.com',

  phone: '+251 972 272 667'

};

const themes = {

  light: 'light',

  dark: 'dark'

};

const translations = {

  en: {

    metaTitle: 'Mulee | Full-Stack Web Developer Portfolio',

    metaDescription: 'Mulugeta Daba is a Full-Stack Web Developer and Information Technology student at Jimma University, building modern, scalable web applications.',

    brandTagline: 'Full-Stack Developer',

    nav: ['About', 'Skills', 'Projects', 'Education', 'Services', 'Contact'],

    themeText: 'Theme',

    hero: {

      badge: 'Available for projects and collaborations',

      eyebrow: 'Full-Stack Developer & IT Student',

      titleHtml: 'Hi, I’m \<span class="accent-text">Mulee\</span>',

      subtitle: 'I build practical web applications—from polished React interfaces to dependable Node.js APIs—with a focus on clarity, accessibility, and reliable data.',

      actions: ['Download Resume'],

      typed: ['Full-Stack Web Developer', 'React & TypeScript Developer', 'Node.js API Developer', 'IT Student at Jimma University']

    },

    about: {

      eyebrow: 'About Me',

      title: 'Focused on clean code, reliable systems, and thoughtful user experiences.',

      bio: 'I am Mulugeta Daba, an Information Technology student at Jimma University with a growing passion for software engineering and product building. I enjoy turning ideas into practical, responsive, and scalable web applications that solve real problems. My learning journey has strengthened my problem-solving mindset, discipline, and curiosity across both frontend and backend technologies. I’m especially interested in full-stack development because it lets me connect user experience, business logic, and data in a single thoughtful system. I continue building real-world projects, learning from experienced developers, and improving through collaboration.',

      factsTitle: 'Quick Facts',

      facts: ['Location: Jimma, Ethiopia', 'Education: Bachelor of Information Technology', 'Graduation: 2027', 'Role: Full-Stack Developer'],

      whyHire: 'Why Hire Me',

      strengths: [

        ['Fast Learner', 'Adapts quickly to new tools and workflows.'],

        ['Problem Solver', 'Breaks down complex problems into clear steps.'],

        ['Team Collaborator', 'Communicates clearly and works well with others.'],

        ['Growth Mindset', 'Seeks feedback and keeps improving consistently.']

      ]

    },

    skills: {

      eyebrow: 'Technical Skills',

      title: 'Technical Skills',

      description: 'Technologies and tools I use to build responsive interfaces, scalable APIs, and reliable applications.',

      filterLabel: 'Filter skills by category',

      filters: ['All', 'Frontend', 'Backend', 'Database', 'Tools'],

      note: 'Always learning • Always building • Always improving',

      descriptions: [
        'Responsive interfaces and user experiences',
        'Server-side logic and API development',
        'Data storage, querying, and API integration',
        'Version control, testing, and productivity'
      ],

      cards: ['Frontend Development', 'Backend Development', 'Database Technologies', 'Development Tools']

    },

    projects: {

      eyebrow: 'Featured Projects',

      title: 'Selected work that reflects practical problem solving and product thinking.',

      cards: [

        ['Human Resource Management System', 'Employee management platform with CRUD operations and database integration.', ['Employee management', 'CRUD operations', 'Database integration']],

        ['Student Registration System', 'Secure registration workflow with authentication and data validation.', ['Student records', 'Authentication', 'Data validation']],

        ['Portfolio Website', 'Responsive personal brand experience with animations and dark mode.', ['Responsive design', 'Dark mode', 'Smooth animations']],

        ['REST API Project', 'Well-structured API with authentication, CRUD endpoints, and PostgreSQL integration.', ['Authentication', 'CRUD endpoints', 'Database integration']],

        ['Task Management Application', 'Dashboard-driven task workflow with notifications and tracking tools.', ['User dashboard', 'Task tracking', 'Notifications']]

      ],

      actions: ['Live Demo', 'GitHub']

    },

    education: {

      eyebrow: 'Education & Experience',

      title: 'Academic preparation grounded in software fundamentals and practical project work.',

      cards: [

        ['Jimma University', ['Bachelor of Information Technology, 3rd Year Student', 'Expected Graduation: 2027']],

        ['Relevant Coursework', ['Data Structures & Algorithms, Database Systems, Web Development, Computer Networks, Distributed Systems, Software Engineering']],

        ['Academic Achievements', ['Relevant projects, hackathons, competitions, and awards showcased through hands-on problem solving.']],

        ['Certifications', ['Certification placeholders available for future credentials in web development, backend systems, and cloud fundamentals.']]

      ]

    },

    services: {

      eyebrow: 'Services',

      title: 'Practical development support for modern digital products.',

      cards: [

        ['Web Development', 'Modern responsive websites with strong visual polish and usability.'],

        ['Backend Development', 'Scalable server-side applications with clean architecture and maintainability.'],

        ['API Development', 'RESTful API design, integration, and documentation support.'],

        ['Database Design', 'Efficient schemas and data models for reliability and performance.'],

        ['Version Control', 'Git and GitHub workflows for collaboration and code quality.']

      ]

    },

    contact: {

      eyebrow: 'Contact',

      title: 'Reach out for collaborations or project discussions.',

      labels: ['Full Name', 'Email', 'Subject', 'Message'],

      submit: 'Send Message',

      subjectHint: 'At least 5 characters.',

      messageHint: 'At least 20 characters.',

      infoTitle: 'Contact Information',

      info: ['Email: mulugetadaba719\@gmail.com', 'Phone: +251 972 272 667', 'Instagram: @mulee_19', 'Location: Jimma, Ethiopia', 'Status: Available for collaborations'],

      quickTitle: 'Quick Actions',

      quickDesc: 'Copy details instantly or jump into a direct email draft.',

      copyEmail: 'Copy Email',

      copyPhone: 'Copy Phone',

      emailMe: 'Email Me',

      socialTitle: 'Social Links',

      mapTitle: 'Interactive Map',

      mapLabel: 'Stylized map card of Jimma, Ethiopia',

      mapText: 'Jimma, Ethiopia'

    },

    footer: {

      role: 'Full-Stack Web Developer',

      copyright: '© {year} Mulee. All rights reserved.',

      backToTop: 'Back to top'

    },

    feedback: {

      name: 'Please enter your full name.',

      email: 'Please enter a valid email address.',

      subject: 'Subject must be at least 5 characters.',

      message: 'Message must be at least 20 characters.',

      sending: 'Sending message...',

      success: "Message sent successfully! I'll get back to you within 24-48 hours.",

      serverError: 'Failed to send message. Please email me directly at mulugetadaba719\@gmail.com.',

      copiedEmail: 'Email copied to clipboard.',

      copiedPhone: 'Phone number copied to clipboard.',

      copyFailed: 'Copy failed. You can select the contact detail manually.',

      copiedFallback: 'Copied to clipboard.'

    },

    typed: ['Full-Stack Web Developer', 'React & TypeScript Developer', 'Node.js API Developer', 'IT Student at Jimma University']

  },

  om: {

    metaTitle: 'Mulee | Portfoliou Hojjataa Webii Full-Stack',

    metaDescription: 'Muleen hojii-gaggeessaa webii full-stack fi barataa Information Technology kan Jimma University keessatti argamu yoo ta’u, application webii ammayyaa fi guddachuu danda’u ijaara.',

    brandTagline: 'Hojjataa Full-Stack',

    nav: ['Waaʼee', 'Ogummaa', 'Pirojektoota', 'Barnoota', 'Tajaajila', 'Quunnamtii'],

    themeText: 'Maqaa',

    hero: {

      badge: 'Pirojektii fi walta’iinsaaf ni argama',

      eyebrow: 'Hojjataa Full-Stack fi Barataa IT',

      titleHtml: 'Akkam jirtu, ani \<span class="accent-text">Mulee\</span>',

      subtitle: 'Application webii qabatamaa ijaara; React interface bareedaa irraa hanga Node.js API amanamaatti, iftoomina, salphina fayyadamaa fi amanamummaa data irratti xiyyeeffachuun.',

      actions: ['Resume Download'],

      typed: ['Hojjataa Webii Full-Stack', 'Guddisaa React & TypeScript', 'Guddisaa Node.js API', 'Barataa IT Jimma University']

    },

    about: {

      eyebrow: 'Waaʼee Koo',

      title: 'Koodii qulqulluu, sirna amanamaa fi muuxannoo fayyadamaa irratti xiyyeeffata.',

      bio: 'Ani Mulugeta Daba dha, barataa Information Technology kan Jimma University keessatti argamu. Barnoota software engineering fi ijaarsa product irratti fedhii guddaa qaba. Yaada gara application webii qabatamaa, saffisaa fi guddachuu dandaʼuutti jijjiiruu ni jaalladha. Barnootni koo yaada rakkoo furuu, of-dandaʼuu fi barnoota itti fufiinsa qabu natti cimsan. Full-stack development irratti addatti xiyyeeffachuun, muuxannoo fayyadamaa, logic hojii fi data walitti fiduu natti tolcha. Pirojektoota qabatamaa ijaaruun, warra muuxannoo qaban irraa barachuun, walta’iinsaan dandeettii koo nan guddifadha.',

      factsTitle: 'Bakka Saamtii',

      facts: ['Bakki: Jimma, Itophiyaa', 'Barnoota: Bachelor of Information Technology', 'Eebbifamuu: 2027', 'Gahee: Hojjataa Full-Stack'],

      whyHire: 'Maaliif Na Fudhattu',

      strengths: [

        ['Saffisaan Barata', 'Meeshaalee fi hojmaata haaraa saffisaan qabsaaʼa.'],

        ['Rakkoo Fura', 'Rakkoo cimaa sadarkaa salphaatti qooda.'],

        ['Walqixxummaa Garee', 'Baayyee gaarii taʼeen waliin hojjecha.'],

        ['Guddattee Ilaala', 'Deebii fudhatee itti fufa.']

      ]

    },

    skills: {

      eyebrow: 'Ogummaa Teeknikaa',

      title: 'Ogummaa Teeknikaa',

      description: 'Teeknolojii fi meeshaalee ani interface, API fi application amanamaa ijaaruuf fayyadamu.',

      filterLabel: 'Ogummaa gosa irratti hundaa’uun filadhu',

      filters: ['Hunda', 'Frontend', 'Backend', 'Database', 'Meeshaalee'],

      note: 'Yeroo hunda barachaa • Yeroo hunda ijaaraa • Yeroo hunda fooyya’aa',

      descriptions: [
        'Interface deebii kennu fi muuxannoo fayyadamaa',
        'Logic server-side fi misooma API',
        'Kuusaa data, gaafachuu fi walitti hidhiinsa API',
        'To’annoo version, qorannoo fi hojii saffisiisuu'
      ],

      cards: ['Development Frontend', 'Development Backend', 'Teeknolojii Database', 'Meeshaalee Hojii']

    },

    projects: {

      eyebrow: 'Pirojektoota Filataman',

      title: 'Hojii qabatamaa fi yaada product irratti hundaaʼan keessaa muraasa.',

      cards: [

        ['Human Resource Management System', 'Sirna bulchiinsa hojjettootaa CRUD fi database waliin.', ['Bulchiinsa hojjettootaa', 'CRUD', 'Database waliin walitti hidhiinsa']],

        ['Student Registration System', 'Galmee barattootaa amanamaa, authentication fi validation qabu.', ['Galmee barattootaa', 'Authentication', 'Validation data']],

        ['Portfolio Website', 'Portfolio responsive, animations fi dark mode qabu.', ['Responsive design', 'Dark mode', 'Animations saffisaa']],

        ['REST API Project', 'API caaseffama gaarii qabu, authentication fi CRUD endpoints waliin.', ['Authentication', 'CRUD endpoints', 'Database waliin hidhiinsa']],

        ['Task Management Application', 'Dashboard hojii, hojii hordoffii fi notification waliin.', ['Dashboard fayyadamaa', 'Hordoffii hojii', 'Notification']]

      ],

      actions: ['Demo Lubbuudhaan', 'GitHub']

    },

    education: {

      eyebrow: 'Barnootaa fi Muuxannoo',

      title: 'Barnoota software buʼuuraa fi hojii qabatamaa irratti hundaaʼe.',

      cards: [

        ['Jimma University', ['Bachelor of Information Technology, barataa waggaa 3ffaa', 'Bara eebbii eegamu: 2027']],

        ['Kitaaba Barnootaa Ariifachiisaa', ['Data Structures & Algorithms, Database Systems, Web Development, Computer Networks, Distributed Systems, Software Engineering']],

        ['Milkaaʼina Barnootaa', ['Pirojektoota, hackathon, taphoota fi badhaasa hojii irratti hundaaʼe.']],

        ['Certificate', ['Certificate booda itti dabalamuu dandaʼu jechuun bakka qophaaʼe.']]

      ]

    },

    services: {

      eyebrow: 'Tajaajila',

      title: 'Deeggarsa development qabatamaa oomishaalee dijitaalaa ammayyaa.',

      cards: [

        ['Web Development', 'Website ammayyaa fi responsive akka gaariitti hojjetaman.'],

        ['Backend Development', 'Application server-side guddina qabu fi caaseffama qulqulluu qabu.'],

        ['API Development', 'RESTful API design fi integration.'],

        ['Database Design', 'Schema fi data model buʼaa-qabeessa.'],

        ['Version Control', 'Git fi GitHub workflow walitti dhufeenya hojii.']

      ]

    },

    contact: {

      eyebrow: 'Quunnamtii',

      title: 'Hojii waltaʼii fi marii pirojektii irratti na qunnamaa.',

      labels: ['Maqaa Guutuu', 'Email', 'Mata-duree', 'Ergaa'],

      submit: 'Ergi',

      subjectHint: 'Yoo xiqqaate qubee 5.',

      messageHint: 'Yoo xiqqaate qubee 20.',

      infoTitle: 'Odeeffannoo Quunnamtii',

      info: ['Email: mulugetadaba719\@gmail.com', 'Bilbila: +251 972 272 667', 'Instagram: @mulee_19', 'Bakka: Jimma, Itophiyaa', 'Haala: Walta’iinsaaf banaa'],

      quickTitle: 'Hojii Ariifataa',

      quickDesc: 'Odeeffannoo hatattamaan copy godhuu ykn email kallattiin erguu.',

      copyEmail: 'Email copy godhi',

      copyPhone: 'Bilbila copy godhi',

      emailMe: 'Email natti ergi',

      socialTitle: 'Linkii Hawaasaa',

      mapTitle: 'Kaartaa Interaktiivii',

      mapLabel: 'Kaartaa stylized Jimma, Itophiyaa',

      mapText: 'Jimma, Itophiyaa'

    },

    footer: {

      role: 'Hojjataa Webii Full-Stack',

      copyright: '© {year} Mulee. Mirgi hundi ni eegama.',

      backToTop: 'Gara olitti deebiʼi'

    },

    feedback: {

      name: 'Maaloo maqaa guutuu kee galchi.',

      email: 'Mee email sirrii galchi.',

      subject: 'Mata-dureen yoo xiqqaate qubee 5 qabaachuu qaba.',

      message: 'Ergaan yoo xiqqaate qubee 20 qabaachuu qaba.',

      sending: 'Ergaa ergamaa jira...',

      success: 'Ergaan milkaaʼinaan ergame! Sa’aatii 24-48 keessatti siif deebisa.',

      serverError: 'Ergaa erguun hin milkoofne. Kallattiin email naaf ergi: mulugetadaba719\@gmail.com.',

      copiedEmail: 'Email clipboard irratti koppii godhame.',

      copiedPhone: 'Bilbilli clipboard irratti koppii godhame.',

      copyFailed: 'Copy hin milkoofne. Maaloo odeeffannoo keessaa filadhu.',

      copiedFallback: 'Clipboard irratti koppii godhame.'

    },

    typed: ['Hojjataa Webii Full-Stack', 'Guddisaa React & TypeScript', 'Guddisaa Node.js API', 'Barataa IT Jimma University']

  },

  am: {

    metaTitle: 'Mulee | ፉል-ስታክ ድህረ ገጽ ገንቢ ፖርትፎሊዮ',

    metaDescription: 'Mulugeta Daba የፉል-ስታክ ድህረ ገጽ ገንቢ እና የInformation Technology ተማሪ ሲሆን ዘመናዊ እና የሚያድጉ የድር መተግበሪያዎችን ይገነባል።',

    brandTagline: 'ፉል-ስታክ ገንቢ',

    nav: ['ስለኔ', 'ችሎታ', 'ፕሮጀክቶች', 'ትምህርት', 'አገልግሎቶች', 'እውቂያ'],

    themeText: 'ገጽታ',

    hero: {

      badge: 'ለፕሮጀክቶች እና ትብብር ዝግጁ ነኝ',

      eyebrow: 'ፉል-ስታክ ገንቢ እና የIT ተማሪ',

      titleHtml: 'ሰላም፣ እኔ \<span class="accent-text">Mulee\</span> ነኝ',

      subtitle: 'ከተዋቡ React ገጾች እስከ አስተማማኝ Node.js APIs ድረስ ተግባራዊ የድር መተግበሪያዎችን እገነባለሁ፤ ግልጽነትን፣ ተደራሽነትን እና የውሂብ አስተማማኝነትን በማስቀደም።',

      actions: ['ሪዙሜ አውርድ'],

      typed: ['ፉል-ስታክ ድህረ ገጽ ገንቢ', 'React & TypeScript ገንቢ', 'Node.js API ገንቢ', 'Jimma University የIT ተማሪ']

    },

    about: {

      eyebrow: 'ስለኔ',

      title: 'ንፁህ ኮድ፣ አስተማማኝ ስርዓት እና አሳታሚ የተጠቃሚ ተሞክሮ ላይ እተኮራለሁ。',

      bio: 'እኔ Mulugeta Daba ነኝ፣ በJimma University የInformation Technology ተማሪ ነኝ። በሶፍትዌር ልማት እና በፕሮዳክት ግንባታ ላይ ጠንካራ ፍላጎት አለኝ። ሃሳቦችን ተግባራዊ፣ ምላሽ ሰጪ እና የሚያድጉ የድር መተግበሪያዎች ለመቀየር እወዳለሁ። በፉል-ስታክ ልማት ላይ ልዩ ፍላጎት አለኝ ምክንያቱም የተጠቃሚ ተሞክሮ፣ የስራ ሎጂክ እና ዳታን በአንድ አስተሳሰብ ውስጥ እንዲጣመር ያስችለኛል። ተግባራዊ ፕሮጀክቶችን እገነባለሁ፣ ከሌሎች ገንቢዎች እማራለሁ እና በትብብር ችሎታዬን እያሳደግሁ ነው።',

      factsTitle: 'ፈጣን መረጃ',

      facts: ['ቦታ: Jimma, Ethiopia', 'ትምህርት: Bachelor of Information Technology', 'ምረቃ: 2027', 'ሙያ: Full-Stack Developer'],

      whyHire: 'ለምን እቀጠራለሁ',

      strengths: [

        ['ፈጣን ተማሪ', 'አዲስ መሳሪያዎችን ፈጣን እቀላቀላለሁ。'],

        ['ችግኝ ፈቺ', 'አስቸጋሪ ችግኞችን በግልፅ እደርዳለሁ。'],

        ['የቡድን ተባባሪ', 'ግልፅ እገናኛለሁ እና ከሌሎች ጋር ጥሩ እሰራለሁ。'],

        ['የእድገት አስተሳሰብ', 'እንግዲኛ አስተያየት እቀበላለሁ እና እቀጥላለሁ。']

      ]

    },

    skills: {

      eyebrow: 'ቴክኒካዊ ችሎታዎች',

      title: 'ቴክኒካዊ ችሎታዎች',

      description: 'ምላሽ ሰጪ በይነገጾችን፣ ሊሰፉ የሚችሉ APIs እና አስተማማኝ መተግበሪያዎችን ለመገንባት የምጠቀምባቸው ቴክኖሎጂዎች እና መሳሪያዎች።',

      filterLabel: 'ችሎታዎችን በምድብ ያጣሩ',

      filters: ['ሁሉም', 'Frontend', 'Backend', 'ዳታቤዝ', 'መሳሪያዎች'],

      note: 'ሁልጊዜ እማራለሁ • ሁልጊዜ እገነባለሁ • ሁልጊዜ እሻሻላለሁ',

      descriptions: [
        'ምላሽ ሰጪ በይነገጾች እና የተጠቃሚ ተሞክሮ',
        'የሰርቨር ሎጂክ እና API ልማት',
        'የውሂብ ማከማቻ፣ ጥያቄ እና API ግንኙነት',
        'የስሪት ቁጥጥር፣ ሙከራ እና የሥራ ቅልጥፍና'
      ],

      cards: ['Frontend ልማት', 'Backend ልማት', 'Database ቴክኖሎጂዎች', 'የልማት መሳሪያዎች']

    },

    projects: {

      eyebrow: 'ተመረጡ ፕሮጀክቶች',

      title: 'ተግባራዊ ችግኝ ፈታትን እና የምርት አስተሳሰብን የሚያሳዩ ስራዎች。',

      cards: [

        ['Human Resource Management System', 'CRUD እና የውሂብ ግንኙነት ያለው የሰራተኞች አስተዳደር ፕላትፎርም。', ['የሰራተኞች አስተዳደር', 'CRUD ኦፕሬሽን', 'የውሂብ ግንኙነት']],

        ['Student Registration System', 'አስተማማኝ የምዝገባ ሂደት ከauthentication እና data validation ጋር。', ['የተማሪ መዝገቦች', 'Authentication', 'የውሂብ ማረጋገጫ']],

        ['Portfolio Website', 'ምላሽ ሰጪ የግል ፖርትፎሊዮ ከanimations እና dark mode ጋር。', ['Responsive design', 'Dark mode', 'ለስላሳ animations']],

        ['REST API Project', 'በግልፅ የተዘጋጀ API ከauthentication እና CRUD endpoints ጋር。', ['Authentication', 'CRUD endpoints', 'የውሂብ ግንኙነት']],

        ['Task Management Application', 'በdashboard የተመራ የስራ አስተዳደር ከnotifications እና tracking መሳሪያዎች ጋር。', ['የተጠቃሚ ዳሽቦርድ', 'የስራ ክትትል', 'ማሳወቂያዎች']]

      ],

      actions: ['Live Demo', 'GitHub']

    },

    education: {

      eyebrow: 'ትምህርት እና ልምድ',

      title: 'በሶፍትዌር መሰረቶች እና ተግባራዊ ፕሮጀክቶች የተመሠረተ ስልጠና。',

      cards: [

        ['Jimma University', ['Bachelor of Information Technology, 3ኛ ዓመት ተማሪ', 'የሚጠበቀው ምረቃ: 2027']],

        ['ተዛማጅ ኮርሶች', ['Data Structures & Algorithms, Database Systems, Web Development, Computer Networks, Distributed Systems, Software Engineering']],

        ['የትምህርት ስኬቶች', ['ተዛማጅ ፕሮጀክቶች፣ hackathons፣ ውድድሮች እና ሽልማቶች።']],

        ['Certificates', ['ለወደፊት ማረጋገጫዎች ቦታ ተዘጋጅቷል።']]

      ]

    },

    services: {

      eyebrow: 'አገልግሎቶች',

      title: 'ለዘመናዊ የዲጂታል ምርቶች ተግባራዊ የልማት ድጋፍ。',

      cards: [

        ['Web Development', 'ዘመናዊ ምላሽ ሰጪ ድህረ ገጾች。'],

        ['Backend Development', 'ሊሰፋ የሚችል server-side መተግበሪያ。'],

        ['API Development', 'RESTful API ንድፍ እና integration.'],

        ['Database Design', 'ቀላል እና ተግባራዊ schema ንድፎች。'],

        ['Version Control', 'ለቡድን ስራ የGit/GitHub workflow。']

      ]

    },

    contact: {

      eyebrow: 'እውቂያ',

      title: 'ለትብብር ወይም ለፕሮጀክት ውይይት ያግኙኝ።',

      labels: ['ሙሉ ስም', 'ኢሜይል', 'ርዕስ', 'መልዕክት'],

      submit: 'መልዕክት ላክ',

      subjectHint: 'ቢያንስ 5 ቁምፊዎች።',

      messageHint: 'ቢያንስ 20 ቁምፊዎች።',

      infoTitle: 'የእውቂያ መረጃ',

      info: ['ኢሜይል: mulugetadaba719\@gmail.com', 'ስልክ: +251 972 272 667', 'Instagram: @mulee_19', 'ቦታ: Jimma, Ethiopia', 'ሁኔታ: ለትብብር ክፍት'],

      quickTitle: 'ፈጣን እርምጃዎች',

      quickDesc: 'ዝርዝሮችን በፍጥነት ኮፒ አድርጉ ወይም ቀጥታ ኢሜይል ይላኩ。',

      copyEmail: 'ኢሜይል ኮፒ አድርግ',

      copyPhone: 'ስልክ ኮፒ አድርግ',

      emailMe: 'ኢሜይል ላክልኝ',

      socialTitle: 'የማህበራዊ ሊንኮች',

      mapTitle: 'በይነ-መስተዋት ካርታ',

      mapLabel: 'Jimma, Ethiopia ን የሚያሳይ የቅርጽ ካርታ',

      mapText: 'Jimma, Ethiopia'

    },

    footer: {

      role: 'ፉል-ስታክ ድህረ ገጽ ገንቢ',

      copyright: '© {year} Mulee. መብቶች ሁሉ ተጠብቀዋል。',

      backToTop: 'ወደ ላይ ተመለስ'

    },

    feedback: {

      name: 'እባክዎ ሙሉ ስምዎን ያስገቡ።',

      email: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ。',

      subject: 'ርዕሱ ቢያንስ 5 ቁምፊዎች መሆን አለበት።',

      message: 'መልዕክቱ ቢያንስ 20 ቁምፊዎች መሆን አለበት።',

      sending: 'መልዕክት እየተላከ ነው...',

      success: 'መልዕክቱ በተሳካ ሁኔታ ተልኳል! በ24-48 ሰዓታት ውስጥ እመልስልዎታለሁ።',

      serverError: 'መልዕክቱን መላክ አልተሳካም። በቀጥታ በዚህ ኢሜይል ያግኙኝ: mulugetadaba719\@gmail.com.',

      copiedEmail: 'ኢሜይል ወደ clipboard ተቀድቷል。',

      copiedPhone: 'ስልክ ወደ clipboard ተቀድቷል。',

      copyFailed: 'ኮፒ አልተሳካም። እባክዎ በእጅ ይምረጡ。',

      copiedFallback: 'ወደ clipboard ተቀድቷል。'

    },

    typed: ['ፉል-ስታክ ድህረ ገጽ ገንቢ', 'React & TypeScript ገንቢ', 'Node.js API ገንቢ', 'Jimma University የIT ተማሪ']

  }

};

let currentLanguage = 'en';

let typedIndex = 0;

let typedCharIndex = 0;

let typedDirection = 1;

let typeSequence = translations.en.typed;

function setText(selector, value) {

  document.querySelectorAll(selector).forEach((element) => {

    element.textContent = value;

  });

}

function setHTML(selector, value) {

  const element = document.querySelector(selector);

  if (element) {

    element.innerHTML = value;

  }

}

function setListText(selector, values) {

  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {

    if (values[index] !== undefined) {

      element.textContent = values[index];

    }

  });

}

/** Update a heading while preserving its highlighted gradient word. */
function setGradientHeading(selector, value, accentClass = 'skills-gradient') {
  const heading = document.querySelector(selector);
  if (!heading || value == null) return;

  const gradient = heading.querySelector(`.${accentClass}`);
  const label = String(value).trim();
  if (!gradient) {
    heading.textContent = label;
    return;
  }

  const lastSpace = label.lastIndexOf(' ');
  const prefix = lastSpace > 0 ? label.slice(0, lastSpace + 1) : '';
  const highlighted = lastSpace > 0 ? label.slice(lastSpace + 1) : label;

  heading.textContent = prefix;
  gradient.textContent = highlighted;
  heading.appendChild(gradient);
}

function getTranslation() {

  return translations[currentLanguage] || translations.en;

}

function applyTheme(theme) {

  const resolvedTheme = theme === themes.dark ? themes.dark : themes.light;

  document.documentElement.setAttribute('data-theme', resolvedTheme === themes.dark ? 'dark' : 'light');

  localStorage.setItem('portfolio-theme', resolvedTheme);

  const themeIcon = themeToggle?.querySelector('.theme-toggle__icon');
  if (themeIcon) {
    themeIcon.textContent = resolvedTheme === themes.dark ? '☾' : '☼';
  }

}

function initTheme() {

  const storedTheme = localStorage.getItem('portfolio-theme');

  const preferredTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light);

  applyTheme(preferredTheme);

}

function toggleMenu(forceClose = false) {

  const open = forceClose ? false : !navMenu.classList.contains('is-open');

  navMenu.classList.toggle('is-open', open);

  navToggle.setAttribute('aria-expanded', String(open));

}

function rotateTypedText() {

  const current = typeSequence[typedIndex];

  typedCharIndex += typedDirection;

  if (typedDirection === 1 && typedCharIndex >= current.length) {

    typedCharIndex = current.length;

    typedDirection = -1;

    typedText.textContent = current;

    setTimeout(rotateTypedText, 1100);

    return;

  }

  if (typedDirection === -1 && typedCharIndex <= 0) {

    typedCharIndex = 0;

    typedDirection = 1;

    typedIndex = (typedIndex + 1) % typeSequence.length;

    typedText.textContent = '';

    setTimeout(rotateTypedText, 220);

    return;

  }

  typedText.textContent = current.slice(0, Math.max(1, typedCharIndex));

  setTimeout(rotateTypedText, typedDirection === 1 ? 72 : 42);

}

function setupRevealObserver() {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('is-visible');

        observer.unobserve(entry.target);

      }

    });

  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));

  const heroSection = document.querySelector('.hero');

  if (heroSection) {

    observer.observe(heroSection);

  }

}

function setupCertificateGallery() {

  certificateCards.forEach((card) => {

    const image = card.querySelector('[data-certificate-image]');

    const trigger = card.querySelector('[data-certificate-trigger]');

    const emptyState = card.querySelector('[data-certificate-empty]');

    const title = card.querySelector('h3');

    if (!image || !trigger || !emptyState) return;

    image.addEventListener('load', () => {

      emptyState.hidden = true;

      trigger.hidden = false;

      trigger.disabled = false;

    });

    image.addEventListener('error', () => {

      trigger.hidden = true;

      trigger.disabled = true;

      emptyState.hidden = false;

    });

    trigger.addEventListener('click', () => {

      if (!certificateDialog || !certificateDialogImage || !image.complete || !image.naturalWidth) return;

      certificateDialogImage.src = image.currentSrc || image.src;

      certificateDialogImage.alt = image.alt;

      certificateDialogTitle.textContent = title?.textContent || 'Certificate preview';

      if (certificateDialogFullSize) certificateDialogFullSize.href = image.currentSrc || image.src;

      certificateDialog.showModal();

    });

    if (image.complete) image.dispatchEvent(new Event(image.naturalWidth ? 'load' : 'error'));

  });

  certificateDialog?.querySelector('.certificate-dialog__close')?.addEventListener('click', () => certificateDialog.close());

  certificateDialog?.addEventListener('click', (event) => {

    if (event.target === certificateDialog) certificateDialog.close();

  });

}

function updateActiveNav() {

  const sections = [...document.querySelectorAll('main section[id]')];

  const scrollPosition = window.scrollY + 140;

  let currentId = '';

  sections.forEach((section) => {

    if (scrollPosition >= section.offsetTop) {

      currentId = section.id;

    }

  });

  navLinks.forEach((link) => {

    const isActive = link.getAttribute('href') === `#${currentId}`;

    link.classList.toggle('is-active', isActive);

  });

}

function filterSkills(category) {
  const availableCategories = new Set([
    'all',
    ...[...skillCards].map((card) => card.dataset.category).filter(Boolean)
  ]);
  const activeCategory = availableCategories.has(category) ? category : 'all';

  skillCards.forEach((card) => {
    const show = activeCategory === 'all' || card.dataset.category === activeCategory;
    card.classList.toggle('hidden', !show);
    card.setAttribute('aria-hidden', String(!show));
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeCategory;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function validateEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

const contactFields = contactForm

  ? [...contactForm.querySelectorAll('input[name], textarea[name]')]

  : [];

const contactSubmitButton = contactForm?.querySelector('button[type="submit"]');

const contactSubmitLabel = contactSubmitButton?.querySelector('.submit-label');

function getContactFieldError(field) {

  const value = field.value.trim();

  const feedback = getTranslation().feedback;

  if (field.name === 'name' && !value) return feedback.name;

  if (field.name === 'email' && !validateEmail(value)) return feedback.email;

  if (field.name === 'subject' && value.length < 5) return feedback.subject;

  if (field.name === 'message' && value.length < 20) return feedback.message;

  return '';

}

function updateContactField(field) {

  const errorElement = document.getElementById(`${field.name}-error`);

  if (!errorElement) return '';

  const error = getContactFieldError(field);

  field.setAttribute('aria-invalid', error ? 'true' : 'false');

  errorElement.textContent = error;

  errorElement.hidden = !error;

  return error;

}

function setFormStatus(message, state = '') {

  if (!formStatus) return;

  formStatus.textContent = message;

  formStatus.classList.remove('is-pending', 'is-success', 'is-error');

  if (state) formStatus.classList.add(`is-${state}`);

  formStatus.style.color = '';

}

function createResumeDownload() {

  const resumeText = `Mulee\nFull-Stack Web Developer\n\nProfessional Summary\nPassionate Full-Stack Developer building modern, scalable, and user-focused web applications with clean code and innovative solutions.\n\nEducation\nJimma University | Bachelor of Information Technology | 3rd Year Student\nExpected Graduation: 2027\n\nHighlights\n- Frontend development\n- Backend systems\n- REST APIs\n- Database design\n- Team collaboration\n`;

  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });

  const url = URL.createObjectURL(blob);

  resumeDownloads.forEach((link) => {

    link.setAttribute('href', url);

    link.setAttribute('download', 'Mulee-Resume.txt');

  });

}

function applyLanguage(lang) {

  currentLanguage = translations[lang] ? lang : 'en';

  const dictionary = getTranslation();

  localStorage.setItem('portfolio-language', currentLanguage);

  document.documentElement.lang = currentLanguage;

  document.title = dictionary.metaTitle;

  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {

    metaDescription.setAttribute('content', dictionary.metaDescription);

  }

  setText('.brand small', dictionary.brandTagline);

  setListText('.nav-menu a[href^="#"]', dictionary.nav);

  setText('.theme-toggle__text', dictionary.themeText);

  setText('.hero__intro-badge', dictionary.hero.badge);

  setText('.hero .eyebrow', dictionary.hero.eyebrow);

  setHTML('#hero-title', dictionary.hero.titleHtml);

  setText('#typed-text', dictionary.hero.typed[0]);

  setText('.hero__subtitle', dictionary.hero.subtitle);

  setListText('.hero__actions .btn', dictionary.hero.actions);

  const sectionContent = [

    ['#about', dictionary.about],

    ['#projects', dictionary.projects],

    ['#education', dictionary.education],

    ['#services', dictionary.services],

    ['#contact', dictionary.contact]

  ];

  sectionContent.forEach(([selector, content]) => {

    setText(`${selector} .section-heading .eyebrow`, content.eyebrow);

    setText(`${selector} .section-heading h2`, content.title);

  });

  // Translate Skills separately so the heading's gradient span is preserved.
  setText('#skills .section-heading .eyebrow', dictionary.skills.eyebrow);
  setGradientHeading('#skills-title', dictionary.skills.title || 'Technical Skills');
  setText('#skills .skills-intro', dictionary.skills.description || dictionary.skills.title);

  if (dictionary.skills.note) {
    const skillsFooter = document.querySelector('#skills .skills-footer');
    if (skillsFooter) {
      // Preserve a readable footer while allowing its text to follow the selected language.
      skillsFooter.textContent = dictionary.skills.note;
    }
  }

  if (Array.isArray(dictionary.skills.filters)) {
    setListText('#skills .filter-btn', dictionary.skills.filters);
  }

  const skillFilterGroup = document.querySelector('#skills .filter-bar');
  if (skillFilterGroup && dictionary.skills.filterLabel) {
    skillFilterGroup.setAttribute('aria-label', dictionary.skills.filterLabel);
  }

  setText('.about__bio p', dictionary.about.bio);

  setText('.about__facts h3', dictionary.about.factsTitle);

  setListText('.about__facts li', dictionary.about.facts);

  setText('.about__strengths h3', dictionary.about.whyHire);

  document.querySelectorAll('.strength-grid article').forEach((card, index) => {

    const strength = dictionary.about.strengths[index];

    if (!strength) {

      return;

    }

    const title = card.querySelector('strong');

    const description = card.querySelector('p');

    if (title) {

      title.textContent = strength[0];

    }

    if (description) {

      description.textContent = strength[1];

    }

  });

  document.querySelectorAll('#skills .skill-card').forEach((card, index) => {
    const title = card.querySelector('.skill-category-info h3');
    const description = card.querySelector('.skill-category-info p');

    if (title && dictionary.skills.cards?.[index]) {
      title.textContent = dictionary.skills.cards[index];
    }

    if (description && dictionary.skills.descriptions?.[index]) {
      description.textContent = dictionary.skills.descriptions[index];
    }
  });

  document.querySelectorAll('.project-card').forEach((card, index) => {

    const project = dictionary.projects.cards[index];

    if (!project) {

      return;

    }

    const title = card.querySelector('h3');

    const description = card.querySelector('p');

    const featureItems = card.querySelectorAll('ul li');

    const actionLinks = card.querySelectorAll('.project-card__actions a');

    if (title) {

      title.textContent = project[0];

    }

    if (description) {

      description.textContent = project[1];

    }

    featureItems.forEach((item, itemIndex) => {

      if (project[2]?.[itemIndex]) {

        item.textContent = project[2][itemIndex];

      }

    });

    actionLinks.forEach((link, itemIndex) => {

      if (dictionary.projects.actions[itemIndex]) {

        link.textContent = dictionary.projects.actions[itemIndex];

      }

    });

  });

  document.querySelectorAll('.timeline__item').forEach((item, index) => {

    const entry = dictionary.education.cards[index];

    if (!entry) {

      return;

    }

    const heading = item.querySelector('h3');

    const paragraphs = item.querySelectorAll('p');

    if (heading) {

      heading.textContent = entry[0];

    }

    paragraphs.forEach((paragraph, paragraphIndex) => {

      if (entry[1]?.[paragraphIndex]) {

        paragraph.textContent = entry[1][paragraphIndex];

      }

    });

  });

  document.querySelectorAll('.service-card').forEach((card, index) => {

    const service = dictionary.services.cards[index];

    if (!service) {

      return;

    }

    const title = card.querySelector('h3');

    const description = card.querySelector('p');

    if (title) {

      title.textContent = service[0];

    }

    if (description) {

      description.textContent = service[1];

    }

  });

  setText('#contact .section-heading h2', dictionary.contact.title);

  setListText('#contact .contact-form .form-row label', dictionary.contact.labels);

  setText('#contact .contact-form .submit-label', dictionary.contact.submit);

  setText('#subject-hint', dictionary.contact.subjectHint);

  setText('#message-hint', dictionary.contact.messageHint);

  contactFields.forEach((field) => {

    if (field.dataset.touched === 'true' && field.getAttribute('aria-invalid') === 'true') {

      updateContactField(field);

    }

  });

  setText('#contact .contact-card--info h3', dictionary.contact.infoTitle);

  setListText('#contact .contact-card--info ul li', dictionary.contact.info);

  setText('#contact .contact-card--quick-actions h3', dictionary.contact.quickTitle);

  setText('#contact .contact-card--quick-actions p', dictionary.contact.quickDesc);

  setListText('#contact .contact-card--quick-actions .copy-button', [dictionary.contact.copyEmail, dictionary.contact.copyPhone]);

  setText('#contact .contact-card--quick-actions a.btn', dictionary.contact.emailMe);

  setText('#contact .contact-card--social h3', dictionary.contact.socialTitle);

  setText('#contact .map-card h3', dictionary.contact.mapTitle);

  setText('#contact .map-frame p', dictionary.contact.mapText);

  const mapFrame = document.querySelector('#contact .map-frame');

  if (mapFrame) {

    mapFrame.setAttribute('aria-label', dictionary.contact.mapLabel);

  }

  const footerRole = document.querySelector('.footer > div p');

  if (footerRole) {

    footerRole.textContent = dictionary.footer.role;

  }

  const footerCopy = document.querySelector('.footer > p');

  if (footerCopy) {

    footerCopy.textContent = dictionary.footer.copyright.replace('{year}', new Date().getFullYear().toString());

  }

  setText('.back-to-top', dictionary.footer.backToTop);

  typeSequence = dictionary.typed;

  typedIndex = 0;

  typedCharIndex = 0;

  typedDirection = 1;

  typedText.textContent = typeSequence[0];

  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }

  // Keep compatibility with the previous three-button language switcher if present.
  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === currentLanguage);
  });

}

function initLanguage() {

  const storedLanguage = localStorage.getItem('portfolio-language');

  const browserLanguage = (navigator.language || 'en').toLowerCase();

  const preferredLanguage = translations[storedLanguage] ? storedLanguage : (browserLanguage.startsWith('am') ? 'am' : browserLanguage.startsWith('om') ? 'om' : 'en');

  applyLanguage(preferredLanguage);

}

async function copyContactDetail(target) {

  const value = contactCopies[target];

  if (!value) {

    return;

  }

  try {

    await navigator.clipboard.writeText(value);

    formStatus.textContent = target === 'email' ? getTranslation().feedback.copiedEmail : getTranslation().feedback.copiedPhone;

    formStatus.style.color = 'var(--accent-2)';

  } catch {

    formStatus.textContent = getTranslation().feedback.copyFailed;

    formStatus.style.color = '#ef4444';

  }

}

navToggle?.addEventListener('click', () => toggleMenu());

navLinks.forEach((link) => {

  link.addEventListener('click', (event) => {

    const targetSelector = link.getAttribute('href');

    const target = targetSelector ? document.querySelector(targetSelector) : null;

    if (!target) {

      return;

    }

    event.preventDefault();

    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({

      top: Math.max(0, targetPosition),

      behavior: reduceMotion ? 'auto' : 'smooth'

    });

    window.history.replaceState(null, '', targetSelector);

    toggleMenu(true);

  });

});

themeToggle?.addEventListener('click', () => {

  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? themes.dark : themes.light;

  applyTheme(currentTheme === themes.dark ? themes.light : themes.dark);

});

// Use the dropdown when present; keep the old buttons working for older HTML.
languageSelect?.addEventListener('change', (event) => {
  applyLanguage(event.currentTarget.value || 'en');
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang || 'en');
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterSkills(button.dataset.filter || 'all');
  });
});

copyButtons.forEach((button) => {

  button.addEventListener('click', () => {

    copyContactDetail(button.dataset.copyTarget || '');

  });

});

contactFields.forEach((field) => {

  field.addEventListener('blur', () => {

    field.dataset.touched = 'true';

    updateContactField(field);

  });

  field.addEventListener('input', () => {

    if (field.dataset.touched === 'true') updateContactField(field);

    if (!contactSubmitButton?.disabled) setFormStatus('');

  });

});

/* ==========================================================================

   Contact form → email (EmailJS)

   ========================================================================== */

const EMAILJS = {
  serviceId: 'service_w88mga7',
  templateId: 'template_m1jb4am',
  publicKey: 'PesuY2XO-P1pjZkNt'
};

const SEND_COOLDOWN_MS = 30_000; // minimum wait between two messages

let lastSentAt = 0;

/** Read a trimmed value from a form field by its name. */

function getFieldValue(name) {

  return contactForm.querySelector(`[name="${name}"]`)?.value.trim() || '';

}

/** Send the message through EmailJS. Param names must match the template's {{variables}}. */

function sendContactEmail({ name, email, subject, message }) {

  if (!window.emailjs) {

    return Promise.reject(new Error('EmailJS SDK did not load.'));

  }

  return window.emailjs.send(

    EMAILJS.serviceId,

    EMAILJS.templateId,

    { name, email, subject, message },

    { publicKey: EMAILJS.publicKey }

  );

}

/** Clear the form and every validation message. */

function resetContactForm() {

  contactForm.reset();

  contactFields.forEach((field) => {

    field.dataset.touched = 'false';

    field.setAttribute('aria-invalid', 'false');

    const errorElement = document.getElementById(`${field.name}-error`);

    if (errorElement) {

      errorElement.hidden = true;

      errorElement.textContent = '';

    }

  });

}

/** Turn an EmailJS / network error into a message the visitor can understand. */

function getSendErrorMessage(error) {

  const feedback = getTranslation().feedback;

  if (!navigator.onLine) return 'You appear to be offline. Please check your connection and try again.';

  if (error?.status === 429) return 'Too many messages were sent. Please try again later.';

  // Wrong IDs/keys (400) or Gmail needs reconnecting (412): a setup problem, not the visitor's fault.

  if (error?.status === 400 || error?.status === 412) {

    console.error('EmailJS setup problem:', error.text || error);

  }

  return feedback.serverError;

}

function setSubmitting(isSubmitting, label) {

  if (!contactSubmitButton) return;

  contactSubmitButton.disabled = isSubmitting;

  if (isSubmitting) contactSubmitButton.setAttribute('aria-busy', 'true');

  else contactSubmitButton.removeAttribute('aria-busy');

  if (contactSubmitLabel) contactSubmitLabel.textContent = label;

}

contactForm?.addEventListener('submit', async (event) => {

  event.preventDefault();

  if (contactSubmitButton?.disabled) return;

  // 1) Validate every field and focus the first invalid one

  contactFields.forEach((field) => {

    field.dataset.touched = 'true';

    updateContactField(field);

  });

  const firstInvalid = contactFields.find((f) => f.getAttribute('aria-invalid') === 'true');

  if (firstInvalid) {

    setFormStatus(getContactFieldError(firstInvalid), 'error');

    firstInvalid.focus();

    return;

  }

  const feedback = getTranslation().feedback;

  // 2) Honeypot: real visitors never fill this hidden field. Fake success so bots give up.

  if (getFieldValue('website')) {

    resetContactForm();

    setFormStatus(feedback.success, 'success');

    return;

  }

  // 3) Cooldown against accidental double sends and spam

  const waitSeconds = Math.ceil((SEND_COOLDOWN_MS - (Date.now() - lastSentAt)) / 1000);

  if (waitSeconds > 0) {

    setFormStatus(`Please wait ${waitSeconds}s before sending another message.`, 'error');

    return;

  }

  // 4) Send

  setSubmitting(true, feedback.sending);

  setFormStatus(feedback.sending, 'pending');

  try {

    await sendContactEmail({

      name:    getFieldValue('name'),

      email:   getFieldValue('email'),

      subject: getFieldValue('subject'),

      message: getFieldValue('message')

    });

    lastSentAt = Date.now();

    resetContactForm();

    setFormStatus(feedback.success, 'success');

  } catch (error) {

    console.error('Contact form error:', error);

    setFormStatus(getSendErrorMessage(error), 'error');

  } finally {

    setSubmitting(false, getTranslation().contact.submit);

  }

});

window.addEventListener('scroll', updateActiveNav, { passive: true });

window.addEventListener('resize', () => {

  if (window.innerWidth > 760) {

    toggleMenu(true);

  }

});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear().toString();
}

initTheme();

initLanguage();

createResumeDownload();

setupRevealObserver();

setupCertificateGallery();

updateActiveNav();

rotateTypedText();

filterSkills('all');
