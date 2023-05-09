import React from 'react'
import HeadingFormat from './HeadingFormat'
import ResumeBtn from './ResumeBtn'

const Contact = () => {
  return (
    <section className='h-screen md:h-half-screen' id='contact'>
      <HeadingFormat number={4} title={`What's Next?`} disableLine={true} />
      <p className='text-center text-6xl my-2 text-zinc-200'>Get In Touch</p>
      <p className='text-center md:w-2/3 lg:w-1/2 mx-auto'>
      I’m currently looking for any new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className='flex justify-center'>
        <a href='mailto:farisnura@gmail.com' target='_blank' rel='noopener noreferrer'>
          <ResumeBtn text='Say Hi!' />
        </a>
      </div>
    </section>
  )
}

export default Contact