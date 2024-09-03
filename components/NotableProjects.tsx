import React, { useState } from "react";
import { ARCHIVES, ARCHIVE_CATEGORIES } from "../constant/constant";
import { FiGithub } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";
import { FiFolder } from "react-icons/fi";

const NotableProjects = () => {
  const [archiveCategory, setArchiveCategory] = useState(ARCHIVES[0].category);
  const filteredArchives = ARCHIVES.filter(
    (archive) => archive.category === archiveCategory
  );
  return (
    <section className="flex flex-col pt-28 pb-36">
      <h3 className="text-zinc-300 text-2xl md:text-3xl text-center">
        Other Noteworthy Projects
      </h3>
      <ul className="flex justify-center mt-5 flex-wrap">
        {ARCHIVE_CATEGORIES.map((category, indexCategory) => (
          <li
            onClick={() => setArchiveCategory(category)}
            className={`${
              filteredArchives.some(
                (archive) => archive.category === category
              ) && "text-secondary underline"
            } hover:underline cursor-pointer ${
              indexCategory === ARCHIVE_CATEGORIES.length - 1 ? "mr-0" : "mr-5"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {filteredArchives.map((archive) => (
          <li className="bg-zinc-800 px-5 py-7 rounded">
            <a
              href={archive.urlWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <header className="flex justify-between">
                <a>
                  <FiFolder size={48} className="text-secondary" />
                </a>
                <div className="flex self-center gap-2">
                  {Array.isArray(archive.urlGithub) ? (
                    archive.urlGithub.map((url) => (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <FiGithub size={24} className="hover:text-secondary" />
                      </a>
                    ))
                  ) : (
                    <a
                      href={archive.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={24} className="hover:text-secondary" />
                    </a>
                  )}
                  <a
                    href={archive.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TfiNewWindow size={24} className="hover:text-secondary" />
                  </a>
                </div>
              </header>
              <p
                id="projectTitle"
                className="text-zinc-200 hover:text-secondary mt-6 mb-2 h-12"
              >
                {archive.title}
              </p>
              <p className="mb-6">{archive.desc}</p>
              <footer className="flex flex-wrap flex-row font-space-mono">
                {archive.tags.map((tag) => (
                  <li className="mr-2 lowercase text-sm">{tag}</li>
                ))}
              </footer>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NotableProjects;
