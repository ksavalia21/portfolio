import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import { PROJECTS } from "../utils/constants";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Project() {
  const fullstackProjects = PROJECTS.filter(p => p.category === "fullstack");
  const uiuxProjects = PROJECTS.filter(p => p.category === "uiux");
  const otherProjects = PROJECTS.filter(p => 
    p.category !== "fullstack" && p.category !== "uiux"
  );

  const renderProjects = (projects: typeof PROJECTS, title: string) => (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-primary-300 mb-8">{title}</h2>
      <div className="flex flex-col gap-[60px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.company}
            className="relative flex flex-col max-w-[700px] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="absolute -left-[45px] -top-[30px] text-5xl text-primary-100 opacity-10">
              {index.toString().padStart(2, "0")}
            </span>
            <div className="space-y-4">
              {/* Project header with title */}
              <h3 className="text-4xl font-bold text-primary-100">
                {project.company}
              </h3>
              
              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm bg-primary-800 text-primary-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project position and short description */}
              <div>
                <p className="text-xl text-primary-400 font-medium mb-2">
                  {project.position}
                </p>
                <p className="text-lg text-primary-200">
                  {project.description}
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mt-3">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 hover:bg-primary-700 text-primary-100 rounded-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit Live
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-primary-700 hover:border-primary-500 text-primary-200 rounded-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <AnimatedPage>
      <Head>
        <title>keyur — projects</title>
        <meta
          name="description"
          content="A showcase of my development projects including full-stack applications, UX/UI designs, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper mb-8">
        <AnimatedText element="h1" text="Projects" />
      </div>
      
      {fullstackProjects.length > 0 && 
        renderProjects(fullstackProjects, "Full-Stack Development")}
      
      {uiuxProjects.length > 0 && 
        renderProjects(uiuxProjects, "UI/UX Design Projects")}
      
      {otherProjects.length > 0 && 
        renderProjects(otherProjects, "Other Projects")}
    </AnimatedPage>
  );
} 