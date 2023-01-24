import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/revin-logo-transparan.png'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-main-black text-neutral-white'>
        <div className="leftmenu">
            <Link to='/'>
              <img src={logo} alt="" className='w-[50px]' />
            </Link>
        </div>
        <div className="rightmenu">
            <Link to='/'>Skills</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
        </div>
    </div>
  )
}
