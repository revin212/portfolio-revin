import React from 'react'
import Photo from '../images/main-photo(1).png'

export default function Hero() {
  return (
    <div className='hero-section bg-gradient-blue bg-cover bg-no-repeat
    mt-[4.5rem] '>
        <div className="content-container py-6 flex justify-between items-center px-[2rem] max-w-[1132px] mx-auto">
          <div className="hero-title max-w-[700px]">
            <h1 className=' font-bold text-white text-[6rem] leading-[6rem] mb-6'>Revin Dennis Ramadhan</h1>
            <h3 className=' font-bold text-neutral-light-blue text-3xl'>Enthusiast Front End Web Developer</h3>
          </div>
          <div className='img-container'>
            <img src={Photo} alt="Profile-photo" className='w-[350px]' />
          </div>
        </div>
    </div>
  )
}
// bg-gradient-to-r from-main-dark-blue to-main-strong-blue h-screen
