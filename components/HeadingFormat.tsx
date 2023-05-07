import React from 'react'

interface HeadingFormatProps {
  title: string,
  number: number,
}

const HeadingFormat = ({number, title}: HeadingFormatProps) => {
  return (
    <div className='flex after:block after:relative after:content after:top-5 after:h-0.5 after:ml-5 after:bg-zinc-700 after:w-56'>
      <span className='text-secondary text-2xl self-center font-mono'>{`0${number}.`}</span>
      <h3 className='ml-3 text-3xl'>{title}</h3>
    </div>
  )
}

export default HeadingFormat