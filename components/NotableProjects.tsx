import React from 'react'
import { ARCHIVES } from '../constant/constant'
import { FiGithub } from 'react-icons/fi';
import { TfiNewWindow } from 'react-icons/tfi';
import { FiFolder } from 'react-icons/fi'

const NotableProjects = () => {
  return (
    <section className='flex flex-col py-28'>
      <h3 className='text-zinc-300 ml-3 text-2xl md:text-3xl text-center'>Other Noteworthy Projects</h3>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {ARCHIVES.map(archive => (
              <li className='bg-zinc-800 px-5 py-7 rounded'>
                <a href={archive.urlWebsite} target='_blank' rel='noopener noreferrer'>
                <header className='flex justify-between'>
                <a>
                  <FiFolder size={48} className='text-secondary' />
                </a>
                <div className='flex self-center'>
                  <a href={archive.urlGithub} target='_blank' rel='noopener noreferrer'>
                    <FiGithub size={24}  className='hover:text-secondary' />
                  </a>
                  <a href={archive.urlWebsite} target='_blank' rel='noopener noreferrer'>
                    <TfiNewWindow size={24}  className='ml-5 hover:text-secondary' />
                  </a>
                </div>
                </header>
                <p id='projectTitle' className='text-zinc-200 hover:text-secondary mt-6 mb-2 h-12'>{archive.title}</p>
                <p className='mb-6'>{archive.desc}</p>
                <footer className='flex flex-wrap flex-row font-fira-code'>
                    {archive.tags.map(tag => (
                      <li className='mr-2 lowercase text-sm'>{tag}</li>
                    ))}
                </footer>
                </a>
              </li>
          ))}
      </ul>
    </section>
  )
}

export default NotableProjects