import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children, isHomePage }) {
  return (
    <div className='font-main-poppins'>
        <Navbar isHomePage = {isHomePage} />
        <div className="content">
            { children }
        </div>
        <Footer />
    </div>
  )
}
