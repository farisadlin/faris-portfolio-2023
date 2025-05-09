import React from "react";
import { INFO_LINKS } from "../constant/constant";

const Footer = () => {
  return (
    <footer className="h-full" role="contentinfo" aria-label="Footer">
      <nav
        className="flex gap-10 justify-center md:hidden"
        aria-label="Social media links"
      >
        <ul className="flex gap-10 justify-center" role="list">
          {INFO_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.url} className="mb-6" role="listitem">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile (opens in new tab)`}
                >
                  <Icon
                    size={24}
                    className="hover:text-secondary duration-150 hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className="font-space-mono text-center pb-10" role="contentinfo">
        Designed &amp; Built by Faris Adlin
      </p>
    </footer>
  );
};

export default Footer;
