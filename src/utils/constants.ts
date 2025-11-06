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
  category: "mobile" | "fullstack" | "uiux" | "backend" | "other";
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
    company: "San Francisco State University",
    location: "San Francisco, CA",
    position: "Graduate Researcher - Full Stack R&D Engineer",
    duration: "August 2025 – Present",
    logo: "/images/sfsu_logo.png",
    description: [
      "Architected and deployed a scalable microservices-based document retrieval system utilized by 200+ researchers, serving 47,000 academic papers and maintaining a low P95 query latency of 1.8 seconds.",
      "Engineered a full-stack RAG pipeline using Google Gemini AI and vector embeddings, dramatically improving retrieval precision from 62% to 89% through algorithmic optimization and ChromaDB.",
      "Optimized cloud infrastructure through asynchronous processing and connection pooling, reducing Postgres query time by 40% and enabling the system to handle 3x traffic spikes without performance degradation."
    ]
  },
  {
    company: "QRIOUS TECH TEAM LLP",
    location: "Ahmedabad, India",
    position: "Software Engineer Intern",
    duration: "January 2024 – June 2024",
    logo: "/images/qrious_tech_team_llp_logo.png",
    description: [
      "Designed and implemented 35+ RESTful API endpoints (Python/FastAPI) with robust features like JWT authentication and rate limiting, supporting 50,000+ daily requests with 99.8% uptime.",
      "Delivered a serverless ETL pipeline using AWS Lambda and S3 that automated verification of 80,000+ user records daily, eliminating 40 hrs/week of manual work and reinforcing data integrity.",
      "Collaborated with cross-functional teams of 8 engineers to rapidly troubleshoot production issues, reducing mean time to resolution (MTTR) from 4 hours to 45 minutes through improved monitoring and alerting.",
      "Optimized the CI/CD pipeline with parallelization and caching, decreasing build time from 15 minutes to 3 minutes and facilitating 12+ daily deployments across environments, demonstrating ability to ship fast."
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
  },
  {
    company: "SplitPro",
    position: "Divide and Split Expenses",
    category: "mobile",
    technologies: ["Swift", "FireBase", "SwiftUI"],
    github: "https://github.com/ksavalia21/SplitPro---Divide-Expenses",
    description: "An easy way to split money among friends and family.",
    longDescription: "SplitPro is a modern iOS expense-sharing application built with SwiftUI and Firebase. It enables users to easily track shared expenses with friends and groups, calculate balances, and settle debts efficiently."
  },
  {
    company: "Mood Tracker App",
    position: "Mood Tracker",
    category: "mobile",
    technologies: ["SwiftUI", "SwiftCharts", "UserDefaults"],
    github: "https://github.com/ksavalia21/moodTracker",
    description: "A simple yet effective iOS app designed to help users track and reflect on their daily moods.",
    longDescription: "A minimalist iOS app built using SwiftUI, designed to help users track their daily moods, jot down quick notes, and visualize mood trends over time. This app is perfect for self-reflection and understanding your emotional patterns."
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
