import Head from "next/head";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import { EXPERIENCES } from "../utils/constants";

export default function Experience() {
  return (
    <AnimatedPage>
      <Head>
        <title>keyur — experience</title>
        <meta
          name="description"
          content="A showcase of my professional work experiences and internships."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Experience" />
      </div>
      
      <div className="flex flex-col gap-[100px]">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.company}
            className="relative flex flex-col max-w-[700px]"
          >
            <span className="absolute -left-[45px] -top-[30px] text-5xl text-primary-100 opacity-10">
              {index.toString().padStart(2, "0")}
            </span>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
              <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-md">
                <Image 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  fill 
                  sizes="64px"
                  className="object-contain" 
                />
              </div>
              
              <div>
                <h2 className="text-5xl font-bold text-primary-100">{exp.company}</h2>
                <p className="text-xl text-primary-200">{exp.location}</p>
                <p className="text-lg font-medium text-primary-400">
                  {exp.position}, {exp.duration}
                </p>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 mt-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-lg text-primary-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
} 
