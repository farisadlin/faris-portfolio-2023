import React from "react";
import { PROJECTS } from "../constant/constant";
import { FiGithub } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";

const MainProjects = () => {
  return (
    <ul role="list" aria-label="Featured projects">
      {PROJECTS.map((project, index) => {
        const isEven = index % 2 === 0;
        return [
          <li
            key={project.title}
            className="grid md:gap-10 grid-cols-12 mt-10 mb-24 items-center"
            role="listitem"
          >
            <div
              className={`${
                isEven
                  ? "md:col-start-6 md:col-end-13 md:text-right"
                  : "md:col-start-1 md:col-end-8 md:text-left"
              } p-8 md:p-0 col-start-1 col-end-13 row-start-1 z-20`}
            >
              <p
                className="md:text-secondary font-space-mono"
                role="doc-subtitle"
              >
                Featured Project
              </p>
              <a
                href={project.urlWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 text-2xl md:hover:text-secondary cursor-pointer duration-150"
                aria-label={`Visit ${project.title} website (opens in new tab)`}
              >
                {project.title}
              </a>
              <div
                className="md:bg-zinc-800 md:p-6 mt-5 rounded"
                role="article"
              >
                <p>{project.desc}</p>
              </div>
              <ul
                className={`flex flex-wrap flex-row ${
                  isEven ? "md:justify-end" : "md:justify-start"
                } font-space-mono mt-5`}
                role="list"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`${
                      isEven ? "md:ml-2" : "md:mr-2"
                    } mr-2 lowercase text-sm`}
                    role="listitem"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div
                className={`flex ${
                  isEven ? "md:justify-end" : "md:justify-start"
                } mt-5`}
                role="group"
                aria-label={`Project links for ${project.title}`}
              >
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                >
                  <FiGithub
                    size={24}
                    className="hover:text-secondary duration-150 hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={project.urlWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live website (opens in new tab)`}
                >
                  <TfiNewWindow
                    size={24}
                    className="ml-5 hover:text-secondary duration-150 hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <div
              className={`${
                isEven
                  ? "md:col-start-1 md:col-end-8"
                  : "md:col-start-6 md:col-end-13"
              } col-start-1 col-end-13 row-start-1 z-10 w-full`}
            >
              <a
                href={project.urlWebsite}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project details`}
              >
                <img
                  className="reverse-photo-filter duration-150 w-full h-half-screen md:h-full"
                  src={project.urlImg}
                  alt={`Screenshot of ${project.title} project`}
                  loading="lazy"
                />
              </a>
            </div>
          </li>,
        ];
      })}
    </ul>
  );
};

export default MainProjects;
