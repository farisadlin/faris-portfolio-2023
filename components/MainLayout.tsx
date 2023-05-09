import React, { type ReactNode } from 'react'

const MainLayout = ({ children }: any) => {
  return (
    <div className='px-10 md:px-36 lg:px-48'>{children}</div>
  )
}

export default MainLayout
