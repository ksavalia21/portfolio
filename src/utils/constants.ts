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
      "Built a data pipeline using Python and AWS to automate data verification, improving data processing efficiency by 20%.",
      "Used advanced SQL to generate analytics that informed strategic decisions that drove over $50K+ in Q2 2024 revenue.",
      "Created GitHub Actions pipeline to run 200+ unit tests per push, reducing deployment risk through early bug detection.",
      "Built jscodeshift automation to refactor 35+ React components, cutting bundle size and boosting performance by 25%.",
      "Authored Jest + RTL suite raising coverage to 70% (legacy) and 85% (new features), cutting production defects by 40%.",
      "Delivered scalable software across SDLC—design, implementation, testing, and peer reviews in rapid Agile environment."
    ]
  },
  {
    company: "QRIOUS TECH TEAM LLP",
    location: "Ahmedabad, India",
    position: "Software Engineer Intern",
    duration: "June 2023 – August 2023",
    logo: "/images/qrious_tech_team_llp_logo.png",
    description: [
      "Applied basic data structures and algorithms in Python to optimize search functionality, reducing lookup time by 30%.",
      "Consumed RESTful APIs with TS to fetch and display dynamic data, enhancing user interface interactivity and features.",
      "Integrated frontend app with backend APIs using fetch() and axios, handling asynchronous data operations effectively.",
      "Developed pixel-perfect UI components from Figma mockups using React and Tailwind, ensuring cross-browser support.",
      "Identified and resolved 20+ front-end bugs by debugging TypeScript and CSS, improving application stability and UX.",
      "Collaborated using Git on shared codebase, managing branches, pull requests, and code reviews to ensure team alignment."
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
