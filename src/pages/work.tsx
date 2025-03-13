import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import { WORK } from "../utils/constants";

export default function Project() {
  return (
    <AnimatedPage>
      <Head>
        <title>keyur — projects</title>
        <meta
          name="description"
          content="here are a few hand picked projects i've projected on recently."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Projects" />
      </div>
      <div className="flex flex-col gap-[100px]">
        {WORK.map((project, index) => (
          <div
            key={project.company}
            className="relative flex flex-col max-w-[700px]"
          >
            <span className="absolute -left-[45px] -top-[30px] text-5xl text-primary-100 opacity-10">
              {index.toString().padStart(2, "0")}
            </span>
            <h2 className="text-5xl font-bold text-primary-100 mb-3">
              {project.company}
            </h2>
            <p className="text-xl font-light text-primary-200 mb-3">
              <span className="font-semibold text-primary-400">
                {project.position} —{" "}
              </span>
              {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              visit website
            </a>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
}
