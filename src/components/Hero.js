import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Photo from '../images/main-photo.png'

export default function Hero() {
  return (
    <div>
        <div id='hero' className="content-container py-6 flex flex-col lg:flex-row-reverse lg:justify-between items-center px-[1.2rem] lg:px-[2rem] max-w-[1132px] mx-auto">
          <div className='img-container lg: mb-[2rem]' >
            <LazyLoadImage
            src={Photo} 
            alt="Profile"
            width="350px"
            height="575px"
            data-aos='fade-left' data-aos-offset='300'/>            
          </div>

          <div className="hero-title w-full lg:w-[700px] mt-[2rem] lg:mt-0 lg:pb-[1rem] text-center lg:text-left">
            <div data-aos='fade-right' data-aos-offset='300'>
            <h1 className=' font-bold text-[3.5rem] leading-[4rem] lg:text-[6rem] lg:leading-[6rem] mb-6'>Revin Dennis Ramadhan</h1>
            <h2 className=' font-bold text-neutral-light-blue text-2xl lg:text-3xl mb-[4rem] lg:mb-0'>Front End Web Development Enthusiast</h2>
            </div>            
          </div>
          
        </div>
    </div>
  )
}
