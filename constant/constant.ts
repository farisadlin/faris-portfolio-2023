import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AiOutlineMedium } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

export const MENUS = [
  {
    name: 'About',
    url: '#about'
  },
  {
    name: 'Experience',
    url: '#experience'
  },
  {
    name: 'Work',
    url: '#work'
  },
  {
    name: 'Contact',
    url: '#contact'
  }
]

export const INFO_LINKS = [
  {
    name: 'Github',
    icon: FiGithub,
    url: 'https://github.com/farisadlin/'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/farisadlin/'
  },
  {
    name: 'Medium',
    icon: AiOutlineMedium,
    url: 'https://medium.com/@shifair'
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: 'https://twitter.com/shifairs'
  },
  {
    name: 'Email',
    icon: MdOutlineEmail,
    url: 'mailto:farisnura@gmail.com'
  },
]

export const EXPERIENCES = [
  {
    id: 1,
    jobPosition: "Social Media Analyst",
    company: "Kamtiv",
    dateRange: "November 2018 - December 2019",
    jobDesc: [
      "Gathered social media data from client's social media accounts using third-party applications like Social Sprout for over three clients.",
      "Analyzed insight data from social media platforms using software tools such as Microsoft BI within a specified date range of one year.",
      "Delivered presentable and easily understandable data to each business client (for more than three clients) to provide them with benefits, including: Identifying the type of content they need to post, Determining the optimal time to publish drafts, and recommending hashtags that generate the highest customer interaction.",
    ],
    url: 'https://kamtiv.id/',
  },
  {
    id: 2,
    jobPosition: "IT Associate Consultant",
    company: "Gamatechno",
    dateRange: "December 2019 - June 2020",
    jobDesc: [
      "Assisted the production team in making the master plan and blueprint such as e-Government. Interoperability Framework (e-GIF), SOP ICT. e-Government Masterplan, ICT Masterplan, and Backbone Detail Engineering Design.",
      "Helped the survey team gather data related to the requirements of the master plan for more than Regional Government.",
      "Held presentations for clients to make the project easily understandable so they can work together much more comfortable with us.",
      "Assisted the marketing team in preparing the Budget Plan or Rencana Anggaran Belanja (RAB) and also the Terms of Reference or Kerangka Acuan Kerja (KAK) for clients.",
      "Supported the marketing team in using tools for Email and Whatsapp Marketing.",
      "Helped the division as online marketing when organizing Gamatechno's Online Sharing Session event.",
    ],
    url: 'https://www.gamatechno.com/',
  },
  {
    id: 3,
    jobPosition: "Software Engineer",
    company: "Xapiens",
    dateRange: "March 2021 - April 2022",
    jobDesc: [
      "Developed XSwift, a massive managed service product for internal and external clients from scratch as a web front end developer using React and reached users traffic from 0 to more than 300.000 visits in a year.",
      "Consistently achieved sprint goals without any dragging backlog (0 dragging backlog).",
      "Trusted for deploying web apps regularly in development, staging, hotfix, and production to Rancher.",
      "Actively participated in sprint review, sprint retrospective, sprint grooming, and sprint planning meetings.",
      "Thoroughly documented code to ensure easy maintenance and understanding by other developers.",
      "Wrote several unit tests using Jest. Enzyme, and React Testing Library to ensure product reliability and robustness and increased unit test coverage from 0% to 80%.",
    ],
    url: 'https://xapiens.id/',
  },
  {
    id: 4,
    jobPosition: "Software Engineer",
    company: "Kargo Tech",
    dateRange: "May 2022 - Present",
    jobDesc: [
      "Developed and maintained groundbreaking features across multiple repositories on front end web, including NFT (Nexus for Transporter), NFS (Nexus for Shipper), TMS-Admin, Brokerage Transporter Management System, Webview Transporter, and Armada Web (Internal Tools). Technologies used: HTML, CSS, Javascript, React, GraphQL, Styled-component, Ant Design.",
      "Developed and maintained for mobile apps on front end mobile including T-App (Transporter App). Technologies used: Kotlin, Material UI, GraphQL, and Android Studio.",
      "Switched from web developer to mobile developer and developed two different features that are integrated with back end only in one sprint (two weeks) even though not yet familiar with Kotlin.",
      "Changed the default sound in T-App to a custom one and completed the recording process. Then deployed the custom sound within T-App. All processes are finished in only a week.",
      "Successfully refactored and revitalized the invoice feature on NFT only in one sprint and increased web performance on invoice feature from 5 seconds to 2 seconds.",
      "Prominent tasks were spearheaded, encompassing the management of invoices, implementation of trial features on NFT, live and historical vehicle tracing for transporters, and the registration of a partnership with Panthera Biru Indonesia (PBI). Consequently, non-PBI transporters were effectively converted into PBI partners and increased from only 3 transporters to 12 transporters.",
      "Championed code quality and testing by writing numerous unit tests using Jest and React Testing Library and increased unit test coverage for NFT from 5% to 30%.",
    ],
    url: 'https://kargo.tech/',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Beach Resort",
    desc:
      "Built a beach resort web with sorting based on pricing, guest count, room types, size, breakfast, and pet-friendly features.",
    tags: ["REACT.JS", "REDUX", "CONTEXT API", "NETLIFY", "CONTENTFUL"],
    urlGithub: "https://github.com/farisadlin/beachresort-react",
    urlWebsite: "https://beachresort-farisadlin.netlify.app/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088024/Slideshow/Faris%20Porfolio%20Site/1._Beach_Resort_bplkkj.png",
  },
  {
    id: 2,
    title: "Developer Social Network Website",
    desc:
      "Built and deployed a social network with Node.js, Express, React,JS, Redux & MongoDB (MERN) Stack.",
    tags: [
      "NODE.JS",
      "REACT.JS",
      "MONGODB",
      "EXPRESS.JS",
      "HEROKU",
      "REDUX",
      "AXIOS",
    ],
    urlGithub: "#",
    urlWebsite: "http://devconnector-farisadlin.herokuapp.com/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088015/Slideshow/Faris%20Porfolio%20Site/6._Dev_Connector_u0vee1.png",
  },
  {
    id: 3,
    title: "Wedding Website With Next.JS (Edel Faris)",
    desc:
      "Created a wedding website with a congratulations section for invited guests to give their congratulations.",
    tags: [
      "NEXT.JS",
      "VERCEL",
      "EMOTION",
      "STYLED-COMPONENT",
      "NODE.JS",
      "MONGODB",
    ],
    urlGithub: "#",
    urlWebsite: "https://wedding-edel-faris-new.vercel.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1642940233/farisadlin/edelfaris-thumbnail_fiiazi.png",
  },
  {
    id: 4,
    title: "Wedding Website With Next.JS (Dode Mirah)",
    desc:
      "Made a wedding website that used a unique style like a digital book with animation such as flipping pages. It has a congratulations section so guests that are invited can give congratulations.",
    tags: [
      "NEXT.JS",
      "VERCEL",
      "EMOTION",
      "STYLED-COMPONENT",
      "NODE.JS",
      "MONGODB",
    ],
    urlGithub: "#",
    urlWebsite: "https://wedding-dode-mirah.vercel.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1646453750/farisadlin/ss_dode_mirah_wedding_aueiyz.png",
  },
];

export const ARCHIVE_CATEGORIES = [
  'REACT.JS',
  'NEXT.JS',
  'GATSBY.JS',
]

export const ARCHIVES = [
  {
    id: 1,
    category: 'REACT.JS',
    title: "Landing Page",
    desc:
      "Built and deployed a landing page for a hosting website.",
    tags: ["REACT.JS", "FIGMA", "NETLIFY", "SASS"],
    urlGithub: "https://github.com/farisadlin/technical-test-domainesia",
    urlWebsite: "https://hostingkite.netlify.app/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/c_scale,q_100,w_1000/v1635088059/Slideshow/Faris%20Porfolio%20Site/2._Hosting_Kite_mwr6nv.png",
  },
  {
    id: 2,
    category: 'REACT.JS',
    title: "Burger Web App",
    desc:
      "Made a burger web app using ReactJS as a framework with many libraries, including React Hooks, React Redux, React Router, and Axios.",
    tags: ["REACT.JS", "REDUX", "AXIOS", "NETLIFY", "FIREBASE"],
    urlGithub: "https://github.com/farisadlin/burgerapp-reactjs",
    urlWebsite: "https://react-test-app-db03b.firebaseapp.com/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088012/Slideshow/Faris%20Porfolio%20Site/3._Burger_App_xtjp87.png",
  },
  {
    id: 3,
    category: 'REACT.JS',
    title: "Company Profile",
    desc:
      "Made a company profile website using ReactJS as a framework with React Hooks and React Router.",
    tags: ["REACT.JS", "NETLIFY"],
    urlGithub: "https://github.com/farisadlin/company-profile-reactjs",
    urlWebsite: "https://companyprofile-farisadlin.netlify.app/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088013/Slideshow/Faris%20Porfolio%20Site/4._Company_Profile_yhuyid.png",
  },
  {
    id: 4,
    category: 'GATSBY.JS',
    title: "Personal Website With Gatsby.JS",
    desc:
      "Made a personal portfolio website using GatsbyJS, GraphQL, Node.JS and Strapi.JS as a framework.",
    tags: ["GATSBY.JS", "GRAPHQL", "NODE.JS", "STRAPI.JS"],
    urlGithub: "https://github.com/farisadlin/gatsby-strapi-front-end",
    urlWebsite: "http://faris-portofolio.netlify.app/",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088028/Slideshow/Faris%20Porfolio%20Site/5._Faris_Adlin_xgjwtr.png",
  },
  {
    id: 5,
    category: 'REACT.JS',
    title: "Task Management App",
    desc:
      "Built a management app for both admins and clients to manage inputted tasks.",
    tags: [
      "NODE.JS",
      "REACT.JS",
      "POSTGRES",
      "EXPRESS.JS",
      "HEROKU",
      "REDUX",
      "AXIOS",
      "SASS",
      "BOOTSTRAP",
      "MATERIAL UI",
    ],
    urlGithub: "#",
    urlWebsite: "https://t-manage.netlify.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088024/Slideshow/Faris%20Porfolio%20Site/7._T-Manage_ifunc4.png",
  },
  {
    id: 6,
    category: 'NEXT.JS',
    title: "Personal Website With Next.JS",
    desc:
      "Built and deployed a personal website with Next.JS and only with SASS (No CSS Framework).",
    tags: ["NEXT.JS", "VERCEL", "SASS"],
    urlGithub: "#",
    urlWebsite: "https://farisadlin.vercel.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088037/Slideshow/Faris%20Porfolio%20Site/8._Faris_Adlin_np76gh.png",
  },
  {
    id: 7,
    category: 'NEXT.JS',
    title: "Wedding Website With Next.JS (Riska Intan)",
    desc:
      "Created a wedding website with a congratulations section for invited guests to give their congratulations.",
    tags: ["NEXT.JS", "VERCEL", "EMOTION", "STYLED-COMPONENT"],
    urlGithub: "#",
    urlWebsite: "https://wedding-riska-website.vercel.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1635088054/Slideshow/Faris%20Porfolio%20Site/9._Riska_Intan_fslqdy.png",
  },
  {
    id: 8,
    category: 'NEXT.JS',
    title: "Wedding Website With Next.JS (Rico Peni)",
    desc:
      "Created a wedding website with a congratulations section for invited guests to give their congratulations.",
    tags: [
      "NEXT.JS",
      "VERCEL",
      "EMOTION",
      "STYLED-COMPONENT",
      "NODE.JS",
      "MONGODB",
    ],
    urlGithub: "#",
    urlWebsite: "https://ricopeni.vercel.app",
    urlImg:
      "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1642940528/farisadlin/ricopeni-thumbnail_sd82xn.png",
  },
];

export default {};