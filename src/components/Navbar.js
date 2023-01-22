import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className="leftmenu">
            <Link to='/'>Home</Link>
        </div>
        <div className="rightmenu">
            <Link to='/'>Skills</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
        </div>
    </div>
  )
}
