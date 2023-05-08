import React, { useState } from 'react'
import HeadingFormat from './HeadingFormat'
import { EXPERIENCES } from '../constant/constant'

interface ExperienceProps {
  id: number,
  jobPosition: string,
  company: string,
  dateRange: string,
  jobDesc: string[]
  url: string,
}

const Experiences = () => {
  const [dataExperiences, setDataExperiences] = useState<ExperienceProps>(EXPERIENCES.sort((a, b) => b.id - a.id)[0]);
  const handleClick = (experience) => {
    setDataExperiences(experience);
  };
  return (
    <section className='h-full xl:mx-40 py-28' id='experience'>
      <HeadingFormat number={2} title={`Where I've Worked`} />
    <div className='flex flex-col md:flex-row mt-10'>
      <div className='overflow-x-auto md:overflow-x-visible flex mb-10 flex-row md:flex-col md:mb-0'>
        {EXPERIENCES.map(experience => <button
          onClick={() => handleClick(experience)}
          className={`whitespace-nowrap text-start md:w-48 px-6 py-4 font-fira-code ${dataExperiences.id === experience.id ? 'bg-slate-700 text-secondary border-secondary' : 'border-stone-700'} hover:border-secondary hover:bg-slate-700 hover:border-b-2 md:hover:border-b-0 md:hover:border-l-2 border-b-2 md:border-b-0 md:border-l-2 duration-150`}>
          {experience.company}
        </button>)}
      </div>
      <div className='ml-5'>
        <div className='text-xl text-zinc-300'>
          <span>{`${dataExperiences.jobPosition}`}</span>
          <span className='mx-1 text-secondary'>@</span>
          <a className='text-secondary hover:underline cursor-pointer' href={dataExperiences.url} target='_blank' rel='noopener noreferrer'>{dataExperiences.company}</a>
        </div>
        <p className='mt-2 mb-7 font-fira-code'>{dataExperiences.dateRange}</p>
        <ul className='relative'>
          {dataExperiences.jobDesc.map(desc => <li className='custom-bullet-list'>
            {desc}
          </li>)}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Experiences