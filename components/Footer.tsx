import React from "react";
import { INFO_LINKS } from "../constant/constant";

const Footer = () => {
  return (
    <footer className="h-full">
      <ul className="flex gap-10 justify-center md:hidden">
        {INFO_LINKS.map((link) => {
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
      <p className="font-space-mono text-center pb-10">
        Designed &amp; Built by Faris Adlin
      </p>
    </footer>
  );
};

export default Footer;
