import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/revin-logo-transparan.png'

export default function Navbar({isHomePage}) {
  return (
    <div className=' bg-gradient-black bg-cover bg-no-repeat text-neutral-white fixed left-0 top-0 right-0 '>
      <nav className='flex justify-between items-center px-[2rem] py-[1rem] lg:py-0 max-w-[1132px] mx-auto relative'>
        <div className="leftmenu">
            <Link to={isHomePage && '#' || !isHomePage && '/'}>
              <img src={logo} alt="" className='w-[50px]' />
            </Link>
        </div>
        <div className="rightmenu gap-[4rem] font-bold hidden lg:flex">
            <Link to={isHomePage && '#skills' || !isHomePage && '/'} className=' py-6 border-b-4 border-main-strong-blue' >Skills</Link>
            <Link to={isHomePage && '#projects' || !isHomePage && '/'} className=' py-6 border-b-4 border-main-strong-blue'>Projects</Link>
            <Link to={isHomePage && '#contact' || !isHomePage && '/'} className=' py-6 border-b-4 border-main-strong-blue'>Contact</Link>
        </div>
        <div className="dropdown-menu lg:hidden absolute left-0 right-0 bottom-[-16rem] mx-[2rem] px-[2rem] 
        flex justify-center flex-col h-[250px] bg-gradient-black bg-cover bg-no-repeat rounded-lg text-center">
            <Link to={isHomePage && '#' || !isHomePage && '/'} className=' py-4' >Home</Link>
            <Link to={isHomePage && '#skills' || !isHomePage && '/'} className=' py-4' >Skills</Link>
            <Link to={isHomePage && '#projects' || !isHomePage && '/'} className=' py-4'>Projects</Link>
            <Link to={isHomePage && '#contact' || !isHomePage && '/'} className=' py-4'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}
// bg-gradient-to-r from-main-black to-neutral-dark-gray 
