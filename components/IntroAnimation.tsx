import React from 'react'

const IntroAnimation = ({animationFinished, handleAnimationEnd}) => {
  return (
    <section id='introAnimation'>
      <p 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl ${animationFinished ? 'animate-fade-out' : 'animate-left-to-right'}`} 
      onAnimationEnd={handleAnimationEnd}
      >
        <span className='text-secondary animate-change-text-color'>F</span>
        ARIS</p>
      <p 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 text-8xl ${animationFinished ? 'animate-fade-out' : 'animate-right-to-left'}`}
      >
      <span className='text-secondary animate-change-text-color'>A</span>
        DLIN
        </p>
    </section>
  )
}

export default IntroAnimation