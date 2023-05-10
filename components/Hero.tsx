import React from 'react'
import ResumeBtn from './ResumeBtn'
import CubeAnimation from './CubeAnimation'

const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center pt-44 lg:mx-20 xl:mx-auto py-28 max-w-7xl xl:max-w-7xl'>
      <div className='z-10 relative'>
        <div className='absolute left-0 sm:left-1/2 lg:left-3/4 h-full -z-10'>
          <CubeAnimation />
        </div>
        <p className='font-space-mono text-secondary mb-5'>Hi, my name is</p>
        <h2 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-zinc-300'>Faris Adlin.</h2>
        <h2 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-zinc-500'>I specialize in web development.</h2>
        <p className='max-w-xl mt-5'>
        As a specialized software engineer, I excel in creating exceptional digital experiences. Currently, I am dedicated to building accessible and user-centric products at <a className='text-secondary hover:underline' href='https://kargo.tech/' target='_blank'>Kargo</a>.</p>
        <ResumeBtn />
      </div>
    </section>
  )
}

export default Hero