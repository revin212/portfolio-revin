import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <div className="leftmenu">
            <Link to='/'>Revin Dennis R.</Link>
        </div>
        <div className="rightmenu">
            <Link to='/'>Skills</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
        </div>
    </div>
  )
}
