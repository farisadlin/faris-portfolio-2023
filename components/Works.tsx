import React from 'react'
import HeadingFormat from './HeadingFormat'
import MainProjects from './MainProjects'
import NotableProjects from './NotableProjects'

const Works = () => {
  return (
    <section className='h-screen py-28' id='work'>
      <HeadingFormat number={3} title={`Some things I've Built`} />
      <MainProjects />
      <NotableProjects />
    </section>
  )
}

export default Works