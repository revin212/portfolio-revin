import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/revin-logo-transparan.png'
import menuIcon from '../images/menu-icon.svg'
import closeIcon from '../images/close-icon.svg'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
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
      <div className='z-[2000] px-[1.2rem] lg:px-[2rem] bg-gradient-black bg-cover bg-no-repeat fixed left-0 top-0 right-0 '>
        <nav className='flex justify-between items-center py-[1rem] lg:py-[4px] max-w-[1132px] mx-auto'>
          <div className="leftmenu">
              <Link to='/'>
                <img src={logo} alt="" className='w-[50px]' />
              </Link>
          </div>
          <div className="rightmenu">
              <div className="mobile-menu">
                <button onClick={dropdownMenu} className="lg:hidden">
                  {!openMenu && <img src={menuIcon} alt="menu-icon" className=' w-[40px] transition duration-500 animate-fade-in-rotate' />}
                  {openMenu && <img src={closeIcon} alt="close-icon" className=' w-[40px] transition duration-500 animate-fade-in-rotate' />}
                </button>
              </div>
              <div className="desktop-menu gap-[4rem] font-bold hidden lg:flex items-center">
                <Link to='/#skills'
                className='py-6 hover:border-b-[4px] hover:mb-[-4px] border-main-strong-blue transition-all duration-100' >
                  Skills</Link>
                <Link to='/#projects' 
                className='py-6 hover:border-b-4 hover:mb-[-4px] border-main-strong-blue transition-all duration-100'>
                  Projects</Link>
                <Link to='/#contact' 
                className='py-6 hover:border-b-4 hover:mb-[-4px] border-main-strong-blue transition-all duration-100'>
                  Contact</Link>
              </div>
          </div>
        </nav>
      </div>
      
      {openMenu && 
      <div id='dropdown-menu' className="dropdown-menu dropdown z-[1000] fixed lg:hidden left-0 right-0
        top-[5.5rem] mx-[1.2rem] px-[2rem] flex justify-center 
        flex-col h-[250px] bg-gradient-black bg-cover bg-no-repeat 
        rounded-lg text-center" ref={dropdownMenuRef}>
              <Link to='/' className=' py-4'  onClick={dropdownMenu} >Home</Link>
              <Link to='/#skills' className=' py-4'  onClick={dropdownMenu} >Skills</Link>
              <Link to='/#projects' className=' py-4' onClick={dropdownMenu} >Projects</Link>
              <Link to='/#contact' className=' py-4' onClick={dropdownMenu} >Contact</Link>
      </div>}
    </div>
  )
}
// bg-gradient-to-r from-main-black to-neutral-dark-gray 
