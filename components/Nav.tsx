import React from 'react'
import Drawer from './Drawer'
import { MENUS } from '../constant/constant'
import Image from 'next/image'
import Logo from '../styles/logo.svg'
import ResumeBtn from './ResumeBtn'
import smoothScroll from '../utils/smoothScroll'

const Nav = () => {
  return (
    <section className='fixed top-0 z-50 font-space-mono w-full'>
      <div className="navbar bg-base-100 py-7 px-9">
        <div className="flex-1">
          <a href='/'>
          <Image className='cursor-pointer z-20' src={Logo} width={50} height={50} alt='Logo' />
          </a>
        </div>
        <div className="flex-none">
            <ul className="hidden lg:flex justify-center menu-horizontal px-1">
              {MENUS.map((menu, index) => [
                  <li onClick={smoothScroll} className='self-center mr-10 cursor-pointer hover:text-secondary duration-150'>
                    <a className='text-secondary text-center font-mono text-sm'>{`0${index + 1}. `}</a>
                    <a href={menu.url} className='text-center'>{menu.name}</a>
                  </li>
              ])}
              <ResumeBtn noMargin={true} />
            </ul>
            <Drawer />
        </div>
        </div>
    </section>
  )
}

export default Nav