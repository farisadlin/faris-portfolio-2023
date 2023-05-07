import React from 'react'
import Drawer from './Drawer'
import { MENUS } from '../constant/constant'
import Image from 'next/image'
import Logo from '../styles/logo.svg'

const Nav = () => {
  return (
    <section className='fixed top-0 font-fira-code w-full'>
      <div className="navbar bg-base-100 py-7 px-9">
        <div className="flex-1">
          <Image className='cursor-pointer z-20' src={Logo} width={50} height={50} alt='Logo' />
        </div>
        <div className="flex-none">
            <ul className="hidden lg:flex menu-horizontal px-1">
              {MENUS.map((menu, index) => [
                  <li className='self-center mr-10 cursor-pointer hover:text-secondary duration-150'>
                    <a className='text-secondary text-center'>{`0${index + 1}. `}</a>
                    <a className='text-center'>{menu}</a>
                  </li>
              ])}
              <button className="border border-secondary px-4 rounded py-2 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-btn-resume duration-150">Resume</button>
            </ul>
            <Drawer />
        </div>
        </div>
    </section>
  )
}

export default Nav