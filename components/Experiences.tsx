import React, { useCallback, useState } from "react";
import HeadingFormat from "./HeadingFormat";
import { EXPERIENCES } from "../constant/constant";
import ResumeBtn from "./ResumeBtn";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  const [experienceCount, setExperienceCount] = useState<number>(1);
  const isDataHasSameLength = experienceCount === EXPERIENCES.length;

  const handleMore = useCallback(() => {
    setExperienceCount((prevCount) => prevCount + 1);
  }, []);

  const experiencesToShow = EXPERIENCES.sort((a, b) => b.id - a.id).slice(
    0,
    experienceCount
  );

  return (
    <section
      className="h-full lg:mx-40 xl:mx-auto py-28 max-w-7xl xl:max-w-3xl"
      id="experience"
    >
      <HeadingFormat number={2} title="My Experiences" />
      <section className="dark:bg-none dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid grid-cols-6 gap-0 mx-4 xl:grid-cols-12">
            <div className="col-span-12 xl:col-span-3">
              <div className="text-center xl:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto xl:before:mx-0 before:dark:bg-secondary">
                <h3 className="text-3xl font-semibold font-space-mono">
                  Timeline
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Experiences
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-0 md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                {experiencesToShow.map((experience) => (
                  <ExperienceItem key={experience.id} experience={experience} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ResumeBtn
            onClick={handleMore}
            text="Click More"
            hasResume={false}
            hideBtn={isDataHasSameLength}
          />
        </div>
      </section>
    </section>
  );
};

export default Experiences;
