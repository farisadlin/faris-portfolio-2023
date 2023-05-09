import React, { type ReactNode } from 'react'
import HeadingFormat from './HeadingFormat'
import Image from 'next/image'
import Photo from '../public/images/faris-photo.jpeg'

const About = () => {
  return (
    <section className='h-full lg:mx-20 xl:mx-auto py-28 max-w-7xl xl:max-w-4xl' id='about'>
      <HeadingFormat number={1} title='About Me' />
      <div className='grid xl:grid-cols-2 mt-10 gap-x-10 grid-cols-1'>
        <div>
          <p className='mb-4'>
          Faris has always been passionate about the IT world, and his love for programming led him to pursue a career as a software engineer.
          What&apos;s impressive about Faris is that he&apos;s a self-taught programmer who has honed his skills through hard work and determination.
          </p>
          <p className='mb-4'>
          With his experience in developing android apps and web projects using a variety of tools such as React.JS, Next.JS, Node.JS, GraphQL, Gatsby.JS, Strapi.JS, and Wordpress, Faris has proved to be a versatile and highly-skilled programmer.
          </p>
          <p className='mb-4'>
          In his career, Faris has worked in a range of exciting roles, including social media analyst at <a href='https://kamtiv.id' target='_blank' rel='noopener noreferrer' className='text-secondary hover:underline'>Kamtiv</a> and IT consultant at <a href='https://www.gamatechno.com/' target='_blank' rel='noopener noreferrer' className='text-secondary hover:underline'>PT Gamatechno</a>.
          He&apos;s also contributed his expertise as a software engineer at <a href='https://xapiens.id/' target='_blank' rel='noopener noreferrer' className='text-secondary hover:underline'>Xapiens Teknologi</a> and currently works at <a className='text-secondary hover:underline' href='https://kargo.tech/' target='_blank' rel="noreferrer">Kargo Technologies</a>.
          </p>
          <p className='mb-4'>
          While Faris loves his job at <a className='text-secondary hover:underline' href='https://kargo.tech/' target='_blank' rel="noreferrer">Kargo Technologies</a>, he&apos;s always on the lookout for new challenges and opportunities to learn and grow.
          His passion for the IT world drives him to keep pushing himself and his company towards greater success. With his wealth of experience and knowledge, Faris is sure to make a significant impact in the industry for years to come.
          </p>
        </div>
        <div className='mt-10 xl:mt-0 xl:mx-0 mx-auto relative w-60 h-60 md:w-72 md:h-72 after:block after:absolute after:content after:border-2 after:rounded-md after:border-secondary after:h-full after:w-full after:top-4 after:left-4 after:hover:top-5 after:hover:left-5 after:-z-10 after:duration-150'>
          <Image className='rounded-md photo-filter hover:-translate-y-1 hover:-translate-x-1 duration-150' src={Photo} width={300} height={300} alt='Faris Adlin' />
        </div>
      </div>
    </section>
  )
}

export default About
