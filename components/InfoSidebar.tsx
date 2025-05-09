import React from 'react';
import { INFO_LINKS } from '../constant/constant';

const InfoSidebar = () => {
  return (
    <section className="hidden w-6 fixed bottom-0 left-12 md:block lg:block">
      <ul className="flex flex-col after:content after:block after:w-0.5 after:h-24 after:mx-auto after:bg-white">
        {INFO_LINKS.map(link => {
          const Icon = link.icon;
          return (
            <li className="mb-6">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Icon
                  size={24}
                  className="hover:text-secondary duration-150 hover:-translate-y-1"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InfoSidebar;
