import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/revin-logo-transparan.png'
import menuIcon from '../images/menu-icon.svg'
import closeIcon from '../images/close-icon.svg'
import { useState, useEffect, useRef } from 'react'

export default function Navbar({isHomePage}) {
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownMenuRef = useRef();

  function dropdownMenu(){
    setOpenMenu(()=>!openMenu);
  }

  useEffect(() => {
    let handler = (e) => {
      if(dropdownMenuRef.current && !dropdownMenuRef.current.contains(e.target)){
        setOpenMenu(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })

  return (
    <div className="header-container relative text-neutral-white">
      <div className='z-[2000] bg-gradient-black bg-cover bg-no-repeat fixed left-0 top-0 right-0 '>
        <nav className='flex justify-between items-center px-[1.2rem] lg:px-[2rem] py-[1rem] lg:py-[4px] max-w-[1132px] mx-auto'>
          <div className="leftmenu">
              <Link to={(isHomePage && '#') || (!isHomePage && '/')}>
                <img src={logo} alt="" className='w-[50px]' />
              </Link>
          </div>
          <div className="rightmenu">
              <div className="mobile-menu">
                <button onClick={dropdownMenu} className="lg:hidden">
                  {!openMenu && <img src={menuIcon} alt="menu-icon" className=' w-[40px] transition duration-500 animate-fade-in' />}
                  {openMenu && <img src={closeIcon} alt="close-icon" className=' w-[40px] transition duration-500 animate-fade-in' />}
                </button>
              </div>
              <div className="desktop-menu gap-[4rem] font-bold hidden lg:flex items-center">
                <Link to={(isHomePage && '#skills') || (!isHomePage && '/#skills')} 
                className='py-6 hover:border-b-[4px] hover:mb-[-4px] border-main-strong-blue' >
                  Skills</Link>
                <Link to={(isHomePage && '#projects') || (!isHomePage && '/#projects')} 
                className='py-6 hover:border-b-4 hover:mb-[-4px] border-main-strong-blue'>
                  Projects</Link>
                <Link to={(isHomePage && '#contact') || (!isHomePage && '/#contact')} 
                className='py-6 hover:border-b-4 hover:mb-[-4px] border-main-strong-blue'>
                  Contact</Link>
              </div>
          </div>
        </nav>
      </div>
      
      {openMenu && 
      <div id='dropdown-menu' className="dropdown-menu dropdown fixed lg:hidden left-0 right-0
        top-[5.5rem] mx-[1.2rem] px-[2rem] flex justify-center 
        flex-col h-[250px] bg-gradient-black bg-cover bg-no-repeat 
        rounded-lg text-center" ref={dropdownMenuRef}>
              <Link to={isHomePage && '#' || !isHomePage && '/'} className=' py-4' >Home</Link>
              <Link to={isHomePage && '#skills' || !isHomePage && '/'} className=' py-4' >Skills</Link>
              <Link to={isHomePage && '#projects' || !isHomePage && '/'} className=' py-4'>Projects</Link>
              <Link to={isHomePage && '#contact' || !isHomePage && '/'} className=' py-4'>Contact</Link>
      </div>}
    </div>
  )
}
// bg-gradient-to-r from-main-black to-neutral-dark-gray 
