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
          As a passionate, experienced front-end developer with 3+ years of
          experience in web and mobile development and a proven track record of
          making significant, specific, and self-direction contributions to
          challenging and complex UX projects. He is proficient with JavaScript,
          TypeScript, and modern client-side frameworks such as React, Redux,
          CRA, and Next.js. Seeking a position to apply exceptional
          problem-solving and collaborative skills as part of a team.
        </p>
        <ResumeBtn />
      </div>
    </section>
  );
};

export default Hero;
