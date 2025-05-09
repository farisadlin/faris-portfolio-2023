import React, { useState, useEffect } from 'react';
import Drawer from './Drawer';
import { MENUS } from '../constant/constant';
import Image from 'next/image';
import Logo from '../styles/logo.svg';
import ResumeBtn from './ResumeBtn';
import smoothScroll from '../utils/smoothScroll';
import Link from 'next/link';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Create intersection observer to detect visible sections
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections in the page
    MENUS.forEach(menu => {
      const sectionId = menu.url.substring(1);
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fixed top-0 z-50 w-full font-space-mono">
      <div className="px-9 py-7 navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <Image className="z-20 cursor-pointer" src={Logo} width={50} height={50} alt="Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="hidden justify-center px-1 lg:flex menu-horizontal">
            {MENUS.map((menu, index) => [
              <li
                key={menu.url}
                onClick={smoothScroll}
                className={`self-center mr-10 cursor-pointer duration-150 ${
                  activeSection === menu.url.substring(1)
                    ? 'text-secondary'
                    : 'hover:text-secondary'
                }`}
              >
                <a className="font-mono text-sm text-center text-secondary">{`0${index + 1}. `}</a>
                <a href={menu.url} className="text-center">
                  {menu.name}
                </a>
              </li>,
            ])}
            <ResumeBtn noMargin={true} />
          </ul>
          <Drawer />
        </div>
      </div>
    </section>
  );
};

export default Nav;
