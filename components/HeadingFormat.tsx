import React from 'react'

interface HeadingFormatProps {
  title: string,
  number: number,
}

const HeadingFormat = ({number, title}: HeadingFormatProps) => {
  return (
    <div className='flex after:relative after:content after:top-4 after:md:top-5 after:h-0.5 after:ml-5 after:bg-zinc-700 after:w-14 after:sm:w-56 after:flex-auto after:sm:flex-auto after:xl:flex-none after:block after:md:block'>
      <span className='text-secondary text-xl md:text-2xl self-center font-mono'>{`0${number}.`}</span>
      <h3 className='ml-3 text-2xl md:text-3xl'>{title}</h3>
    </div>
  )
}

export default HeadingFormat