import React from "react";
import ResumeBtn from "./ResumeBtn";
import PersonAnimation from "./PersonAnimation";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center pt-44 lg:mx-20 xl:mx-auto py-28 max-w-7xl xl:max-w-7xl">
      <div className="z-10 relative">
        <div className="absolute left-0 sm:left-1/2 lg:left-3/4 h-full -z-10">
          <PersonAnimation />
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-secondary">
          Hello, I'm Faris Adlin.
        </h2>
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-zinc-300">
          I'm a Experienced Software Engineer.
        </h2>
        <p className="max-w-xl mt-5">
          I'm a passionate Front-End Developer with 4+ years of experience
          specializing in React.js, Next.js, Vue.js, TypeScript, and
          cutting-edge UI frameworks. My expertise lies in building responsive,
          accessible, and scalable web applications powered by AI-driven
          technologies. Proven track record in optimizing performance, enhancing
          security, and collaborating effectively within cross-functional teams
          to deliver intelligent, user-focused solutions in SaaS, FinTech, and
          logistics sectors.
        </p>
        <ResumeBtn />
      </div>
    </section>
  );
};

export default Hero;
