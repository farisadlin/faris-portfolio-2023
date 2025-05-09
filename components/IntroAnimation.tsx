import Image from 'next/image';
import React from 'react';
import Logo from '../styles/logo.svg';

interface IntroAnimationProps {
  animationFinished: boolean;
  handleAnimationEnd: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({
  animationFinished = false,
  handleAnimationEnd,
}) => {
  return (
    <section id="introAnimation" data-testid="intro-animation" onAnimationEnd={handleAnimationEnd}>
      <Image
        src={Logo}
        width={150}
        height={150}
        alt="Logo"
        className={`cursor-pointer z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-48 ${
          animationFinished ? 'animate-fade-out' : 'animate-top-to-bottom'
        }`}
      />
      <p
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl ${
          animationFinished ? 'animate-fade-out' : 'animate-left-to-right'
        }`}
      >
        <span className="text-secondary animate-change-text-color">F</span>ARIS
      </p>
      <p
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 text-8xl ${
          animationFinished ? 'animate-fade-out' : 'animate-right-to-left'
        }`}
      >
        <span className="text-secondary animate-change-text-color">A</span>DLIN
      </p>
    </section>
  );
};

export default IntroAnimation;
