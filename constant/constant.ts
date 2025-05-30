import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AiOutlineMedium } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

export const MENUS = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Experience',
    url: '#experience',
  },
  {
    name: 'Work',
    url: '#work',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];

export const INFO_LINKS = [
  {
    name: 'Github',
    icon: FiGithub,
    url: 'https://github.com/farisadlin/',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/farisadlin/',
  },
  {
    name: 'Medium',
    icon: AiOutlineMedium,
    url: 'https://medium.com/@shifair',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: 'https://twitter.com/shifairs',
  },
  {
    name: 'Email',
    icon: MdOutlineEmail,
    url: 'mailto:farisnura@gmail.com',
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    jobPosition: 'Social Media Analyst',
    company: 'Kamtiv',
    dateRange: '11/2018 - 12/2019',
    jobDesc: [
      "Gathered social media data from client's social media accounts using third-party applications like Social Sprout for over three clients.",
      'Analyzed insight data from social media platforms using software tools such as Microsoft BI within a specified date range of one year.',
      'Delivered presentable and easily understandable data to each business client (for more than three clients) to provide them with benefits, including: Identifying the type of content they need to post, Determining the optimal time to publish drafts, and recommending hashtags that generate the highest customer interaction.',
    ],
    url: 'https://kamtiv.id/',
  },
  {
    id: 2,
    jobPosition: 'IT Associate Consultant',
    company: 'Gamatechno',
    dateRange: '12/2019 - 06/2020',
    jobDesc: [
      'Assisted the production team in making the master plan and blueprint such as e-Government. Interoperability Framework (e-GIF), SOP ICT. e-Government Masterplan, ICT Masterplan, and Backbone Detail Engineering Design.',
      'Helped the survey team gather data related to the requirements of the master plan for more than Regional Government.',
      'Held presentations for clients to make the project easily understandable so they can work together much more comfortable with us.',
      'Assisted the marketing team in preparing the Budget Plan or Rencana Anggaran Belanja (RAB) and also the Terms of Reference or Kerangka Acuan Kerja (KAK) for clients.',
      'Supported the marketing team in using tools for Email and Whatsapp Marketing.',
      "Helped the division as online marketing when organizing Gamatechno's Online Sharing Session event.",
    ],
    url: 'https://www.gamatechno.com/',
  },
  {
    id: 3,
    jobPosition: 'Software Engineer (Front End)',
    company: 'Xapiens',
    dateRange: '02/2021 - 04/2022',
    jobDesc: [
      'Developed XSwift, a massive managed service product for internal and external clients from scratch as a web front end developer using React and reached users traffic from 0 to more than 300.000 visits in a year.',
      'Consistently achieved sprint goals without any dragging backlog (0 dragging backlog).',
      'Trusted for deploying web apps regularly in development, staging, hotfix, and production to Rancher.',
      'Actively participated in sprint review, sprint retrospective, sprint grooming, and sprint planning meetings.',
      'Thoroughly documented code to ensure easy maintenance and understanding by other developers.',
      'Wrote several unit tests using Jest. Enzyme, and React Testing Library to ensure product reliability and robustness and increased unit test coverage from 0% to 80%.',
    ],
    url: 'https://xapiens.id/',
  },
  {
    id: 4,
    jobPosition: 'Software Engineer (Front End)',
    company: 'Kargo Tech',
    dateRange: '05/2022 - 09/2023',
    jobDesc: [
      'Developed and maintained groundbreaking features across multiple repositories on front end web, including NFT (Nexus for Transporter), NFS (Nexus for Shipper), TMS-Admin, Brokerage Transporter Management System, Webview Transporter, and Armada Web (Internal Tools). Technologies used: HTML, CSS, Javascript, React, GraphQL, Styled-component, Ant Design.',
      'Developed and maintained for mobile apps on front end mobile including T-App (Transporter App). Technologies used: Kotlin, Material UI, GraphQL, and Android Studio.',
      'Switched from web developer to mobile developer and developed two different features that are integrated with back end only in one sprint (two weeks) even though not yet familiar with Kotlin.',
      'Changed the default sound in T-App to a custom one and completed the recording process. Then deployed the custom sound within T-App. All processes are finished in only a week.',
      'Successfully refactored and revitalized the invoice feature on NFT only in one sprint and increased web performance on invoice feature from 5 seconds to 2 seconds.',
      'Prominent tasks were spearheaded, encompassing the management of invoices, implementation of trial features on NFT, live and historical vehicle tracing for transporters, and the registration of a partnership with Panthera Biru Indonesia (PBI). Consequently, non-PBI transporters were effectively converted into PBI partners and increased from only 3 transporters to 12 transporters.',
      'Championed code quality and testing by writing numerous unit tests using Jest and React Testing Library and increased unit test coverage for NFT from 5% to 30%.',
    ],
    url: 'https://kargo.tech/',
  },
  {
    id: 5,
    jobPosition: 'Software Engineer (Front End)',
    company: 'Brick',
    dateRange: '09/2023 - 07/2024',
    jobDesc: [
      `
      Handled the creation and maintenance of innovative features in several online repositories, such as the
well-known Brick Dashboard (Client Side), BOIVA (Client Side), and Mantul Dashboard (Internal User).
Advanced technologies including HTML, CSS, Javascript, React, REST API, Styled Component, and
Material UI Design (Versions 4 and 5) were used to improve important projects like the KPK Project, Brick
Analytics, and Email Template.
      `,
      `
      Implemented JavaScript Obfuscation to randomize the bundle so it cannot be read from the client side
      (improving security from the client side).`,
      `
      Implemented AES256-GCM encryption for HTTP Requests and Responses across several websites,
notably the Brick Dashboard (Client Side) and Mantul Dashboard (Internal). This initiative significantly
bolstered web security from the client side, setting a new standard in data protection.
      `,
      `
      Efficiently led the sunsetting process for various products on the Brick Dashboard, including Payroll and
BrickFlex (P2P Lending), ensuring a smooth transition and minimal impact on user experience.
      `,
      `
      Introduced and successfully implemented Feature Flag (feature toggle) using Unleash on the Brick
Dashboard, marking a first in the application's history. This innovation allowed for more flexible and
controlled feature deployment.
      `,
      `
      Elevated the code quality by writing extensive unit tests using Jest and React Testing Library. Remarkably
increased the unit test coverage for Experience, Payment, and Boiva modules from 0% to 80%,
significantly improving the reliability and maintainability of the codebase.
      `,
    ],
    url: 'https://www.onebrick.io/',
  },
  {
    id: 6,
    jobPosition: 'Software Engineer (Front End)',
    company: 'HireFazz',
    dateRange: '07/2024 - 08/2024',
    jobDesc: [
      "Expanded company's digital presence while revolutionizing recruitment processes through AI implementation.",
      'Developed critical website sections including services overview, company background, solution offerings, and pricing structures.',
      'Engineered AI-powered recruitment system transforming the traditional hiring process.',
      'Implemented CV screening automation reducing initial candidate review time by eliminating manual sorting.',
      'Created asynchronous interview capability allowing candidates to complete interviews on their schedule.',
      'Designed comprehensive scoring algorithms for both candidates and CVs ensuring objective evaluation.',
      'Delivered integrated solution combining intuitive website navigation with sophisticated recruitment tools.',
      'Established data-driven recruitment framework replacing subjective assessment with quantifiable metrics.',
    ],
    url: 'http://hirefazz.com',
  },
  {
    id: 7,
    jobPosition: 'Software Engineer (Front End)',
    company: 'Property Connect',
    dateRange: '08/2024 - 09/2024',
    jobDesc: [
      'Built comprehensive website architecture including homepage, partnership section, markets overview, news portal, and contact interface',
      'Implemented fully responsive design ensuring optimal viewing experience across all devices while maintaining clean, elegant aesthetics',
      'Developed custom Content Management System enabling non-technical staff to Create, Read, Update and Delete news content independently',
      'Engineered intuitive admin interfaces eliminating the need for developer intervention in routine content updates',
      "Delivered a solution balancing visual appeal with functional simplicity, enhancing the company's professional online presence",
    ],
    url: 'https://www.propertyconnect.io',
  },
  {
    id: 8,
    jobPosition: 'Software Engineer (Front End)',
    company: 'MyKonsul',
    dateRange: '09/2024 - 02/2025',
    jobDesc: [
      'Engineered real-time websocket chat functionality enabling instant communication between clients and legal advocates',
      'Built PDF generation system for legal proposals, case documents, and advocate profiles, eliminating manual paperwork',
      'Implemented notification infrastructure ensuring timely updates on case developments',
      'Developed a bidding system with simulation capabilities allowing advocates to strategically evaluate potential cases',
      'Created comprehensive status tracking dashboards for both clients and advocates to monitor progress',
      'Designed intuitive profile customization features increasing platform personalization and user satisfaction',
      'Established case registration and advocate selection mechanisms streamlining the client-advocate matching process',
    ],
    url: 'https://www.mykonsul.com',
  },
  {
    id: 9,
    jobPosition: 'Software Engineer (Front End)',
    company: 'CBMO AI',
    dateRange: '03/2025 - 04/2025',
    jobDesc: [
      'Designed and implemented fully mobile-responsive layouts across all nine pages, ensuring optimal user experience on all devices',
      'Applied SEO best practices throughout the site architecture, improving search engine visibility and performance',
      'Created engaging UI animations using Framer Motion to enhance visual appeal and user engagement',
      'Built the entire project using React, Next.js, and TypeScript for a robust, maintainable codebase',
      'Delivered the complete project including all responsive features within a tight one-week timeframe',
      'Implemented cross-browser compatibility testing to ensure consistent performance across platforms',
      'Collaborated with stakeholders to translate design requirements into functional, responsive code',
    ],
    url: 'https://cbmo.ai',
  },
  {
    id: 10,
    jobPosition: 'Lead Front End Developer',
    company: 'MyKonsul',
    dateRange: '04/2025 - 05/2025',
    jobDesc: [
      'Led a team of four front-end developers in the successful delivery of seven major features within a tight two-week deadline, working intensively across 14 consecutive days to meet business goals',
      'Developed and maintained a scalable component library, creating reusable UI elements to ensure consistent design and accelerate development across the entire front-end',
      'Implemented Role-Based Access Control (RBAC) to manage user permissions and access levels effectively for different roles within the Admin panel',
      'Configured centralized dashboard controls for both advocate and client roles, streamlining management and improving user experience across both interfaces',
    ],
    url: 'https://admin.mykonsul.com',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'CBMO AI',
    desc: 'Led the development of a comprehensive landing page with multiple sections including Home, About, Blog, Pricing, Demo, and various policy pages.',
    tags: ['NEXT.JS', 'FRAMER MOTION', 'TYPESCRIPT', 'TAILWIND CSS'],
    urlGithub: '',
    urlWebsite: 'https://cbmo.ai',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1744170674/SCR-20250406-lfmu_tgxxxx.png',
  },
  {
    id: 2,
    title: 'AI Faris Agents',
    desc: 'Fullstack responsive web app for AI Agents powered by DeepSeek',
    tags: ['VUE.JS', 'FASTIFY', 'TYPESCRIPT', 'NODE-TS', 'SUPABASE', 'RAILWAY'],
    urlGithub: '',
    urlWebsite: 'https://ai-faris-agents.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1742118459/SCR-20250316-otnt_id0np1.png',
  },
  {
    id: 3,
    title: 'Property Connect',
    desc: "Designed and developed a corporate website with content management capabilities to strengthen the company's digital presence and streamline content updates.",
    tags: ['NEXT.JS', 'LARAVEL', 'TYPESCRIPT', 'PHP', 'MYSQL'],
    urlGithub: '',
    urlWebsite: 'https://www.propertyconnect.io',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1741633569/SCR-20250311-cscs_wsqbcb.jpg',
  },
  {
    id: 4,
    title: 'HireFazz Main App',
    desc: "Expanded company's digital presence while revolutionizing recruitment processes through AI implementation.",
    tags: ['NEXT.JS', 'SHADCN', 'TYPESCRIPT', 'NODE-TS', 'PRISMA', 'MYSQL'],
    urlGithub: '',
    urlWebsite: 'https://app.hirefazz.com/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1722873602/farisadlin/SCR-20240805-tvon_njffeo.png',
  },
  {
    id: 5,
    category: 'FULL-STACK',
    title: 'Todos App',
    desc: "Another todos app. But wait, this is different, because it demonstrates that I'm capable of being a full-stack developer using Javascript all the way! (Next.js and Express)",
    tags: ['NEXT.JS', 'EXPRESS.JS', 'TYPESCRIPT', 'MYSQL'],
    urlGithub: 'https://github.com/farisadlin/todos-app-client-side',
    urlWebsite: 'https://todos-app-client-side.vercel.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1725399944/farisadlin/SCR-20240904-ccrq_srss3c.png',
  },
  {
    id: 6,
    title: 'Beach Resort',
    desc: 'Built a beach resort web with sorting based on pricing, guest count, room types, size, breakfast, and pet-friendly features.',
    tags: ['REACT.JS', 'REDUX', 'CONTEXT API', 'NETLIFY', 'CONTENTFUL'],
    urlGithub: 'https://github.com/farisadlin/beachresort-react',
    urlWebsite: 'https://beachresort-farisadlin.netlify.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088024/Slideshow/Faris%20Porfolio%20Site/1._Beach_Resort_bplkkj.png',
  },
  {
    id: 7,
    title: 'Vue Pokemon',
    desc: 'Built a Pokémon page that can catch some Pokémons and can manage your own Pokémon.',
    tags: ['VUE.JS', 'PINIA', 'GRAPHQL', 'VERCEL'],
    urlGithub: 'https://github.com/farisadlin/vue-pokemon-page',
    urlWebsite: 'https://vue-pokemon-page.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1689786446/vue-pokemon/vue-pokemon-1_inwuyf.png',
  },
  {
    id: 8,
    title: 'Wedding Website With Next.JS (Edel Faris)',
    desc: 'Created a wedding website with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'VERCEL', 'EMOTION', 'STYLED-COMPONENT', 'NODE.JS', 'MONGODB'],
    urlGithub: '#',
    urlWebsite: 'https://wedding-edel-faris-new.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1642940233/farisadlin/edelfaris-thumbnail_fiiazi.png',
  },
];

export const ARCHIVE_CATEGORIES = ['REACT.JS', 'NEXT.JS', 'GATSBY.JS', 'VUE.JS', 'FULL-STACK'];

export const ARCHIVES = [
  {
    id: 1,
    category: 'REACT.JS',
    title: 'Landing Page',
    desc: 'Built and deployed a landing page for a hosting website.',
    tags: ['REACT.JS', 'FIGMA', 'NETLIFY', 'SASS'],
    urlGithub: 'https://github.com/farisadlin/technical-test-domainesia',
    urlWebsite: 'https://hostingkite.netlify.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/c_scale,q_100,w_1000/v1635088059/Slideshow/Faris%20Porfolio%20Site/2._Hosting_Kite_mwr6nv.png',
  },
  {
    id: 2,
    category: 'REACT.JS',
    title: 'Burger Web App',
    desc: 'Made a burger web app using ReactJS as a framework with many libraries, including React Hooks, React Redux, React Router, and Axios.',
    tags: ['REACT.JS', 'REDUX', 'AXIOS', 'NETLIFY', 'FIREBASE'],
    urlGithub: 'https://github.com/farisadlin/burgerapp-reactjs',
    urlWebsite: 'https://react-test-app-db03b.firebaseapp.com/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088012/Slideshow/Faris%20Porfolio%20Site/3._Burger_App_xtjp87.png',
  },
  {
    id: 3,
    category: 'REACT.JS',
    title: 'Company Profile',
    desc: 'Made a company profile website using ReactJS as a framework with React Hooks and React Router.',
    tags: ['REACT.JS', 'NETLIFY'],
    urlGithub: 'https://github.com/farisadlin/company-profile-reactjs',
    urlWebsite: 'https://companyprofile-farisadlin.netlify.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088013/Slideshow/Faris%20Porfolio%20Site/4._Company_Profile_yhuyid.png',
  },
  {
    id: 4,
    category: 'GATSBY.JS',
    title: 'Personal Website With Gatsby.JS',
    desc: 'Made a personal portfolio website using GatsbyJS, GraphQL, Node.JS and Strapi.JS as a framework.',
    tags: ['GATSBY.JS', 'GRAPHQL', 'NODE.JS', 'STRAPI.JS'],
    urlGithub: 'https://github.com/farisadlin/gatsby-strapi-front-end',
    urlWebsite: 'http://faris-portofolio.netlify.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088028/Slideshow/Faris%20Porfolio%20Site/5._Faris_Adlin_xgjwtr.png',
  },
  {
    id: 5,
    category: 'REACT.JS',
    title: 'Task Management App',
    desc: 'Built a management app for both admins and clients to manage inputted tasks.',
    tags: [
      'NODE.JS',
      'REACT.JS',
      'POSTGRES',
      'EXPRESS.JS',
      'HEROKU',
      'REDUX',
      'AXIOS',
      'SASS',
      'BOOTSTRAP',
      'MATERIAL UI',
    ],
    urlGithub: '#',
    urlWebsite: 'https://t-manage.netlify.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088024/Slideshow/Faris%20Porfolio%20Site/7._T-Manage_ifunc4.png',
  },
  {
    id: 6,
    category: 'NEXT.JS',
    title: 'Personal Website With Next.JS',
    desc: 'Built and deployed a personal website with Next.JS and only with SASS (No CSS Framework).',
    tags: ['NEXT.JS', 'VERCEL', 'SASS'],
    urlGithub: '#',
    urlWebsite: 'https://farisadlin.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088037/Slideshow/Faris%20Porfolio%20Site/8._Faris_Adlin_np76gh.png',
  },
  {
    id: 7,
    category: 'NEXT.JS',
    title: 'Wedding Website With Next.JS (Edel Faris)',
    desc: 'Created a wedding website with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'VERCEL', 'EMOTION', 'STYLED-COMPONENT'],
    urlGithub: '#',
    urlWebsite: 'https://wedding-edel-faris-new.vercel.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1727340025/farisedel/SCR-20240926-nvuv_mjh89c.jpg',
  },
  {
    id: 8,
    category: 'NEXT.JS',
    title: 'Wedding Website With Next.JS (Dode Mirah)',
    desc: 'Created a wedding website lookalike flip-book with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'VERCEL', 'EMOTION', 'STYLED-COMPONENT'],
    urlGithub: '#',
    urlWebsite: 'https://wedding-dode-mirah.vercel.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1727334101/dodemirah/wedding-dode-mirah.vercel.app__1_wcipnn.png',
  },
  {
    id: 9,
    category: 'NEXT.JS',
    title: 'Wedding Website With Next.JS (Riska Intan)',
    desc: 'Created a wedding website with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'VERCEL', 'EMOTION', 'STYLED-COMPONENT'],
    urlGithub: '#',
    urlWebsite: 'https://wedding-riska-website.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088054/Slideshow/Faris%20Porfolio%20Site/9._Riska_Intan_fslqdy.png',
  },
  {
    id: 10,
    category: 'NEXT.JS',
    title: 'Wedding Website With Next.JS (Rico Peni)',
    desc: 'Created a wedding website with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'VERCEL', 'EMOTION', 'STYLED-COMPONENT', 'NODE.JS', 'MONGODB'],
    urlGithub: '#',
    urlWebsite: 'https://ricopeni.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1642940528/farisadlin/ricopeni-thumbnail_sd82xn.png',
  },
  {
    id: 11,
    category: 'VUE.JS',
    title: 'Vue Pokemon',
    desc: 'Built a Pokémon page that can catch some Pokémons and can manage your own Pokémon.',
    tags: ['VUE.JS', 'PINIA', 'GRAPHQL', 'VERCEL'],
    urlGithub: 'https://github.com/farisadlin/vue-pokemon-page',
    urlWebsite: 'https://vue-pokemon-page.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1722873602/farisadlin/SCR-20240805-tvse_we9tia.jpg',
  },
  {
    id: 12,
    category: 'NEXT.JS',
    title: 'HireFazz Landing Page',
    desc: 'Created a wedding website with a congratulations section for invited guests to give their congratulations.',
    tags: ['NEXT.JS', 'RADIX UI', 'TYPESCRIPT', 'MDX'],
    urlGithub: '#',
    urlWebsite: 'https://www.hirefazz.com/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1642940528/farisadlin/ricopeni-thumbnail_sd82xn.png',
  },
  {
    id: 13,
    category: 'FULL-STACK',
    title: 'HireFazz Main App',
    desc: 'Fullstack web app for a platform that uses AI to streamline the hiring process by automating repetitive tasks like CV screening and job matching.',
    tags: ['NEXT.JS', 'RADIX UI', 'TYPESCRIPT', 'NODE-TS', 'PRISMA', 'MYSQL'],
    urlGithub: '#',
    urlWebsite: 'https://app.hirefazz.com/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1722873602/farisadlin/SCR-20240805-tvon_njffeo.png',
  },
  {
    id: 14,
    category: 'FULL-STACK',
    title: 'AI Faris Agents',
    desc: 'Fullstack responsive web app for AI Agents powered by DeepSeek with (Vue.js and Fastify)',
    tags: ['VUE.JS', 'FASTIFY', 'TYPESCRIPT', 'NODE-TS', 'SUPABASE', 'RAILWAY'],
    urlGithub: [],
    urlWebsite: 'https://ai-faris-agents.vercel.app',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1742118459/SCR-20250316-otnt_id0np1.png',
  },
  {
    id: 15,
    category: 'FULL-STACK',
    title: 'Property Connect',
    desc: 'Fullstack responsive web app for Property Connect with (Next.js and Laravel)',
    tags: ['NEXT.JS', 'LARAVEL', 'TYPESCRIPT', 'PHP'],
    urlGithub: [],
    urlWebsite: 'https://www.propertyconnect.io',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1741633569/SCR-20250311-cscs_wsqbcb.jpg',
  },
  {
    id: 16,
    category: 'FULL-STACK',
    title: 'Todos App',
    desc: "Another todos app. But wait, this is different, because it demonstrates that I'm capable of being a full-stack developer using Javascript all the way! (Next.js and Express.js)",
    tags: ['NEXT.JS', 'EXPRESS.JS', 'TYPESCRIPT', 'MYSQL'],
    urlGithub: [
      'https://github.com/farisadlin/todos-app-client-side',
      'https://github.com/farisadlin/todos-app-server-side',
    ],
    urlWebsite: 'https://todos-app-client-side.vercel.app/',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1725399944/farisadlin/SCR-20240904-ccrq_srss3c.png',
  },
  {
    id: 17,
    category: 'NEXT.JS',
    title: 'Invoice Hub',
    desc: 'A modern invoice management application built with Next.js, Material-UI, and TypeScript. This application helps you create, manage, and track invoices efficiently.',
    tags: ['NEXT.JS', 'MATERIAL UI', 'TYPESCRIPT'],
    urlGithub: ['https://github.com/farisadlin/invoice-hub'],
    urlWebsite: 'https://invoice-hub-mu.vercel.app',
    urlImg: '',
  },
  {
    id: 18,
    category: 'NEXT.JS',
    title: 'CBMO AI',
    desc: 'Led the development of a comprehensive landing page with multiple sections including Home, About, Blog, Pricing, Demo, and various policy pages.',
    tags: ['NEXT.JS', 'FRAMER MOTION', 'TYPESCRIPT', 'TAILWIND CSS'],
    urlGithub: '',
    urlWebsite: 'https://cbmo.ai',
    urlImg:
      'https://res.cloudinary.com/https-farisadlin-com/image/upload/v1744170674/SCR-20250406-lfmu_tgxxxx.png',
  },
];
export default {};
