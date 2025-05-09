import React, { useState } from 'react';
import { ARCHIVES, ARCHIVE_CATEGORIES } from '../constant/constant';
import { FiGithub } from 'react-icons/fi';
import { TfiNewWindow } from 'react-icons/tfi';
import { FiFolder } from 'react-icons/fi';

const NotableProjects = () => {
  const [archiveCategory, setArchiveCategory] = useState(ARCHIVES[0].category);
  const filteredArchives = ARCHIVES.filter(archive => archive.category === archiveCategory);
  return (
    <section
      className="flex flex-col pt-28 pb-36"
      role="region"
      aria-label="Other noteworthy projects"
    >
      <h3 className="text-zinc-300 text-2xl md:text-3xl text-center">Other Noteworthy Projects</h3>
      <div
        role="tablist"
        aria-label="Project categories"
        className="flex justify-center mt-5 flex-wrap"
      >
        {ARCHIVE_CATEGORIES.map((category, indexCategory) => (
          <button
            key={category}
            onClick={() => setArchiveCategory(category)}
            role="tab"
            aria-selected={filteredArchives.some(archive => archive.category === category)}
            aria-controls={`projects-${category.toLowerCase()}`}
            className={`${
              filteredArchives.some(archive => archive.category === category) &&
              'text-secondary underline'
            } hover:underline cursor-pointer ${
              indexCategory === ARCHIVE_CATEGORIES.length - 1 ? 'mr-0' : 'mr-5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        role="list"
        aria-label="Project cards"
      >
        {filteredArchives.map(archive => (
          <li key={archive.title} className="bg-zinc-800 px-5 py-7 rounded" role="listitem">
            <a
              href={archive.urlWebsite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${archive.title} project details`}
            >
              <header className="flex justify-between">
                <div aria-hidden="true">
                  <FiFolder size={48} className="text-secondary" />
                </div>
                <div
                  className="flex self-center gap-2"
                  role="group"
                  aria-label={`Project links for ${archive.title}`}
                >
                  {Array.isArray(archive.urlGithub) ? (
                    archive.urlGithub.map((url, index) => (
                      <a
                        key={`${archive.title}-github-${index}`}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${archive.title} source code on GitHub (opens in new tab)`}
                      >
                        <FiGithub size={24} className="hover:text-secondary" aria-hidden="true" />
                      </a>
                    ))
                  ) : (
                    <a
                      href={archive.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${archive.title} source code on GitHub (opens in new tab)`}
                    >
                      <FiGithub size={24} className="hover:text-secondary" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={archive.urlWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${archive.title} live website (opens in new tab)`}
                  >
                    <TfiNewWindow size={24} className="hover:text-secondary" aria-hidden="true" />
                  </a>
                </div>
              </header>
              <h4 className="text-zinc-200 hover:text-secondary mt-6 mb-2 h-12">{archive.title}</h4>
              <p className="mb-6">{archive.desc}</p>
              <footer
                className="flex flex-wrap flex-row font-space-mono"
                role="list"
                aria-label={`Technologies used in ${archive.title}`}
              >
                {archive.tags.map(tag => (
                  <li key={tag} className="mr-2 lowercase text-sm" role="listitem">
                    {tag}
                  </li>
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
