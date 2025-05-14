import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "savalia.keyur1091@gmail.com";
const GITHUB = "https://github.com/ksavalia21";
const LINKEDIN = "https://www.linkedin.com/in/keyursavalia/";

const DISCORD_ID = "207204046115831809";

type Projects = {
  company: string;
  position: string;
  category: "fullstack" | "uiux" | "backend" | "mobile" | "other";
  technologies: string[];
  github?: string;
  link?: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
};

type Experience = {
  company: string;
  location: string;
  position: string;
  duration: string;
  description: string[];
  logo: string;
};

const EXPERIENCES: Experience[] = [
  {
    company: "QRIOUS TECH TEAM LLP",
    location: "Ahmedabad, India",
    position: "Software Engineer Intern",
    duration: "January 2024 – June 2024",
    logo: "/images/qrious_tech_team_llp_logo.png",
    description: [
      "Engineered a scalable ETL pipeline utilizing Python and AWS Ecosystem with Terraform IaC to automate data ingestion from diverse on-premise and cloud sources into Snowflake, improving data processing efficiency by 20%.",
      "Leveraged window functions, CTEs and multi-table joins in complex SQL queries to surface BI insights that drove $50K+ in revenue in Q2 2024.",
      "Automated refactoring of 35+ React components with custom scripts and created 13 reusable UI components, yielding a 25% reduction in page load times and a 15% boost in user engagement.",
      "Led migration from Thrift to gRPC/Protobuf, cutting inter-service latency by 10% and boosting responsiveness."
    ]
  },
  {
    company: "BRAINYBEAM TECHNOLOGIES PVT. LTD.",
    location: "Ahmedabad, India",
    position: "Product Design Intern",
    duration: "June 2023 – August 2023",
    logo: "/images/brainybeam_logo.jpeg",
    description: [
      "Conducted 25+ user research sessions to identify key pain points and areas of satisfaction, subsequently developing new designs based on this feedback and presenting the rationales to stakeholders, which directly contributed to securing a $15K brand deal.",
      "Led end-to-end product design and delivery for the online identity of the client including content strategy, responsive website, brand elements and marketing collateral from the ground up.",
      "Shipped a family engagement app for iOS & Android, designed to boost family participation in senior loved ones' daily activities; a recent survey demonstrated a significant 70% increase in family communication.",
      "Worked with a global team for localization considerations in the app (language, low data etc.) and supported it through rollout in Abu Dhabi, Singapore and Sri Lanka."
    ]
  }
];

const PROJECTS: Projects[] = [
  {
    company: "The Flow Party",
    position: "UI/UX",
    category: "uiux",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    link: "https://flowparty-clone.vercel.app",
    github: "https://github.com/ksavalia21/flowparty-clone",
    description: "Flow Party website clone created with Next JS and TypeScript.",
    longDescription: "A pixel-perfect recreation of the Flow Party digital design agency website with smooth animations, responsive design, and optimized performance."
  },
  {
    company: "SupaDupa",
    position: "UI/UX",
    category: "uiux",
    technologies: ["Next.js", "TypeScript", "Lenis", "GSAP", "TailwindCSS"],
    link: "https://supadupa-clone.vercel.app/en",
    github: "https://github.com/ksavalia21/supadupa-clone",
    description: "SupaDupa website clone created with Next.js, React.js, Typescript, TailwindCSS, Framer-Motion, Lenis and GSAP.",
    longDescription: "An intricate clone of the SupaDupa platform featuring advanced animations, internationalization support, and a mobile-first responsive design approach."
  },
  {
    company: "GRADiEnt",
    position: "Educational Platform",
    category: "fullstack",
    technologies: ["Python", "FastAPI", "Gemini API", "PostgreSQL", "React", "AWS ECS"],
    link: "http://52.9.28.165",
    github: "https://github.com/ksavalia21/gradient",
    description: "AI-powered grading assistant designed to provide instant feedback on student assignments.",
    longDescription: "GRADiEnt is an intelligent grading and feedback platform that uses AI to provide instant, detailed feedback on student submissions. The system helps educators save time on grading while providing students with consistent, comprehensive feedback to improve their learning outcomes."
  },
  {
    company: "Forge API",
    position: "API Documentation Generator",
    category: "fullstack",
    technologies: ["React", "Python", "FastAPI", "Google Gemini", "Jinja2"],
    link: "https://forge-api-eight.vercel.app/",
    github: "https://github.com/ksavalia21/forge-api",
    description: "AI-powered tool to automatically generate beautiful, interactive API documentation from your code files.",
    longDescription: ""
  },
  {
    company: "Stock Chef",
    position: "AI powered recipe generator",
    category: "fullstack",
    technologies: ["Gemini AI", "FastAPI", "Python", "React", "PostgreSQL"],
    link: "",
    github: "https://github.com/ksavalia21/stock-chef",
    description: "AI-powered application that helps users generate personalized recipes based on the ingredients they already have.",
    longDescription: ""
  },
  {
    company: "Corsair Reimagined",
    position: "e-Commerce",
    category: "fullstack",
    technologies: ["React", "Firebase", "Stripe API", "Vite", "TailwindCSS"],
    link: "https://corsair-reimagined.vercel.app",
    github: "https://github.com/ksavalia21/corsair-reimagined",
    description: "Corsair Reimagined is a modern web application built with React, Vite, and Firebase.",
    longDescription: "An e-commerce platform for gaming peripherals featuring user authentication, product catalog, shopping cart functionality, and Stripe payment integration."
  },
  {
    company: "Real-Time Chat Application",
    position: "Chat App",
    category: "fullstack",
    technologies: ["Java", "Socket.IO", "MongoDB", "Node.js", "Express"],
    link: "https://real-time-chat-app-ed1v.onrender.com",
    github: "https://github.com/ksavalia21/real-time-chat-app",
    description: "A real-time chat application built with Java, Node.js, Express, and Socket.IO, enabling users to join rooms, send messages, and see online users.",
    longDescription: "A full-featured chat application with real-time messaging, private rooms, user presence indicators, and message persistence using MongoDB."
  }
];

export {
  EMAIL,
  GITHUB,
  LINKEDIN,
  DISCORD_ID,
  PROJECTS,
  EXPERIENCES,
  fullTwConfig,
};
