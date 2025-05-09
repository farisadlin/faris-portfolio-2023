import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { MENUS } from '../constant/constant';
import ResumeBtn from './ResumeBtn';
import smoothScroll from '../utils/smoothScroll';

const Drawer = () => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    smoothScroll(event);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        className="z-10 left-0 w-12 h-12 text-white flex items-center justify-center"
        onClick={toggleDrawer}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D926AA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-20">
          <div className="flex justify-end h-screen">
            <div className="w-56 bg-neutral shadow-lg" ref={drawerRef}>
              <div className="flex justify-end">
                <button
                  className="py-10 px-12 text-secondary font-bold text-2xl"
                  onClick={toggleDrawer}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <ul>
                {MENUS.map((menu, index) => [
                  <li className="list-none cursor-pointer hover:text-secondary duration-150 flex flex-col mt-4">
                    <a className="text-secondary text-center font-mono text-sm">{`0${
                      index + 1
                    }.`}</a>
                    <a onClick={toggleDrawer} href={menu.url} className="text-center">
                      {menu.name}
                    </a>
                  </li>,
                ])}
              </ul>
              <div className="flex justify-center mt-14">
                <ResumeBtn />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Drawer;
