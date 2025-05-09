import React, { type ReactNode, useState } from 'react';
import IntroAnimation from '../components/IntroAnimation';
import Nav from '../components/Nav';
import { Transition } from '@headlessui/react';
import InfoSidebar from '../components/InfoSidebar';
import Hero from '../components/Hero';
import MainLayout from '../components/MainLayout';
import About from '../components/About';
import Meta from '../components/Meta';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// This is a test comment with    inconsistent    spacing   and no semicolon
//    It should be    formatted    properly    by prettier

// Test function with inconsistent formatting
const testFunction = (): void => {
  console.log('test');
};

export default function Home(): ReactNode {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationEnd = (): void => {
    setAnimationFinished(true);
    if (animationFinished) {
      const introAnimation = document.getElementById('introAnimation');
      introAnimation?.classList.add('hidden');
    }
  };

  return (
    <>
      <Meta />
      <IntroAnimation
        animationFinished={animationFinished}
        handleAnimationEnd={handleAnimationEnd}
      />
      <Transition
        show={animationFinished}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Nav />
        <InfoSidebar />
        <MainLayout>
          <Hero />
          <About />
          <Experiences />
          <Works />
          <Contact />
          <Footer />
        </MainLayout>
      </Transition>
    </>
  );
}
// testing
