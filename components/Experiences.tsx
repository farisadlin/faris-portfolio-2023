import React, { useState } from 'react'
import HeadingFormat from './HeadingFormat'
import { EXPERIENCES } from '../constant/constant'
import ResumeBtn from './ResumeBtn'

interface ExperienceProps {
  id: number,
  jobPosition: string,
  company: string,
  dateRange: string,
  jobDesc: string[]
  url: string,
}

const Experiences = () => {
  const [dataExperiences, setDataExperiences] = useState<any>(EXPERIENCES.sort((a, b) => b.id - a.id).slice(0, 1));

  const isDataHasSameLength = dataExperiences.length === EXPERIENCES.length;

  const handleMore = () => setDataExperiences(experiences => EXPERIENCES.sort((a, b) => b.id - a.id).slice(0, experiences.length + 1));

  return (
    <section className='h-full lg:mx-40 xl:mx-auto py-28 max-w-7xl xl:max-w-3xl' id='experience'>
      <HeadingFormat number={2} title={`My Experiences`} />
    <section className="dark:bg-none dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
              <h3 className="text-3xl font-semibold font-space-mono">Timeline</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Experiences</span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-0 md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {dataExperiences.map(experience => (
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-secondary">
                <h3 className="text-xl font-semibold tracking-wide">{experience.jobPosition} &#64; <a target='_blank' rel='noopener noreferrer' href={experience.url} className='text-secondary hover:underline cursor-pointer'>{experience.company}</a></h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400 font-space-mono">{experience.dateRange}</time>
                <ul className="mt-3">
                  {experience.jobDesc.map(job => (
                    <li className='custom-bullet-list dark:text-gray-400'>
                    {job}
                  </li>
                  ))}
                </ul>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
    <ResumeBtn onClick={handleMore} text={'Click More'} hasResume={false} hideBtn={isDataHasSameLength} />
    </div>
    </section>
  </section>
  )
}

export default Experiences