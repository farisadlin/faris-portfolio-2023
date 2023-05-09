import React from 'react'

const ResumeBtn = ({noMargin = false}) => {
  const downloadUrl = () => window.open('/portfolio_faris-adlin.pdf', '_blank');
  return (
    <a href="#_" className={`relative inline-block text-lg group font-space-mono ${noMargin ? '' : 'mt-12'}`} onClick={downloadUrl}>
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
        <span className="relative">Resume</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
    // <button onClick={downloadUrl} className={`border border-secondary font-space-mono px-4 rounded py-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-btn-resume duration-150 ${noMargin ? '' : 'mt-12'}`}>Resume</button>
  )
}

export default ResumeBtn

