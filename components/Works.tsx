import React from "react";
import HeadingFormat from "./HeadingFormat";
import MainProjects from "./MainProjects";
import NotableProjects from "./NotableProjects";

const Works = () => {
  return (
    <section
      className="py-28 max-w-7xl h-full lg:mx-20 xl:mx-auto xl:max-w-7xl"
      id="work"
    >
      <HeadingFormat number={3} title={`Some things I've Built`} />
      <MainProjects />
      <NotableProjects />
    </section>
  );
};

export default Works;
