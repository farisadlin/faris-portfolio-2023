import React from 'react'
import { Canvas } from "@react-three/fiber";
import Hexagon from './Hexagon';

const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center pt-20'>
      {/* Enable this later */}
      {/* <Canvas>
        <ambientLight intensity={0.9} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Hexagon position={[0, 0, 0]} />
      </Canvas> */}
      <div>
        <p className='font-fira-code text-secondary mb-5'>Hi, my name is</p>
        <h2 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-zinc-300'>Faris Adlin.</h2>
        <h2 className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-zinc-500'>I build things for the web.</h2>
        <p className='max-w-xl mt-5'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a className='text-secondary hover:underline' href='https://kargo.tech/' target='_blank'>Kargo</a>.</p>
        <button className="border border-secondary font-fira-code px-4 rounded py-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-btn-resume duration-150 mt-12">Resume</button>
      </div>
    </section>
  )
}

export default Hero