import React from 'react'

const ResumeBtn = ({noMargin = false}) => {
  const downloadUrl = () => window.open('/portfolio_faris-adlin.pdf', '_blank');
  return (
    <button onClick={downloadUrl} className={`border border-secondary font-fira-code px-4 rounded py-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-btn-resume duration-150 ${noMargin ? '' : 'mt-12'}`}>Resume</button>
  )
}

export default ResumeBtn