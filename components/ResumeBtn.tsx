import React from 'react'

const ResumeBtn = ({hideBtn = false, noMargin = false, text = 'Resume', urlDownload = '#', hasResume = true, onClick = null}) => {
  const downloadUrl = () => window.open('/portfolio_faris-adlin.pdf', '_blank');
  return (
    <a href={hasResume && urlDownload} className={`${hideBtn ? 'hidden' : 'relative'} inline-block text-lg group font-space-mono ${hasResume ? '' : 'cursor-pointer'} ${noMargin ? '' : 'mt-12'}`} onClick={hasResume ? downloadUrl : onClick}>
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
        <span className="relative">{text}</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
  )
}

export default ResumeBtn

