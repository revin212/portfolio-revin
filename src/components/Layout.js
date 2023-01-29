import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className='font-main-poppins'>
        <Navbar />
        <div className="content">
            { children }
        </div>
        <Footer />
    </div>
  )
}
