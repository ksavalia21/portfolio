import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "savalia.keyur1091@gmail.com";
const GITHUB = "https://github.com/ksavalia21";
const LINKEDIN = "https://www.linkedin.com/in/keyursavalia/";

const DISCORD_ID = "207204046115831809";

type Work = {
  company: string;
  position: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "SupaDupa Clone",
    position: "UI/UX",
    link: "https://supadupa-clone.vercel.app/en",
    description:
      "SupaDupa website clone created with Next.js, React.js, Typescript, TailwindCSS, Framer-Motion, Lenis and GSAP.",
  },
  {
    company: "Corsair Reimagined",
    position: "Full-Stack e-Commerce",
    link: "https://corsair-reimagined.vercel.app",
    description:
      "Corsair Reimagined is a modern web application built with React, Vite, and Firebase.",
  },
  {
    company: "Flow Party Clone",
    position: "UI/UX",
    link: "https://bloomapp.com",
    description:
      "Flow Party website clone created with Next JS and TypeScript.",
  },
  {
    company: "Real-Time Chat Application",
    position: "Full-Stack Web App",
    link: "https://real-time-chat-app-ed1v.onrender.com",
    description:
      "A real-time chat application built with Java, Node.js, Express, and Socket.IO, enabling users to join rooms, send messages, and see online users.",
  },
  {
    company: "Royal Reserve Bank",
    position: "Backend",
    link: "https://github.com/ksavalia21/digital-banking-microservices",
    description:
      "Microservice-based scalable and secure banking application using Java to simulate real-world financial transactions and account management.",
  },
  {
    company: "Moodify",
    position: "iOS",
    link: "https://github.com/ksavalia21/moodTracker",
    description:
      "A simple yet effective iOS app designed to help users track and reflect on their daily moods.",
  },
  {
    company: "Pac-Man Legacy",
    position: "Game Development",
    link: "https://github.com/ksavalia21/pac-man-legacy",
    description:
      "Implemented a player agent that uses algorithmic strategy to score high on a predefined, random seeded Pac-Man game framework.",
  },
  {
    company: "DSFS",
    position: "Backend",
    link: "https://github.com/ksavalia21/distributed-storage-file-system",
    description:
      "The Distributed Storage File System (DSFS) is a C++ based distributed file storage system that efficiently stores, retrieves, and manages files across multiple nodes using an HTTP-based communication model.",
  }
];

export {
  EMAIL,
  GITHUB,
  LINKEDIN,
  DISCORD_ID,
  WORK,
  fullTwConfig,
};
