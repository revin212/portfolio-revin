import React from 'react'
import htmlIcon from '../../images/html5-icon.svg'
import tailwindIcon from '../../images/tailwindcss-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import jsIcon from '../../images/javascript-icon.svg'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export default function SubProjects() {
  return (
    <div className='grid grid-cols-1 gap-[1rem] lg:grid-cols-12'>
        <LazyLoadComponent>
        <div className="sub-projects flex overflow-hidden bg-gradient-black bg-cover bg-no-repeat lg:bg-none rounded-xl lg:col-span-8"
        data-aos='fade-right' data-aos-offset='300'>
        <div className="project-1 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0  rounded-xl">
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-rest-countries-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    Rest Countries API Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" className='w-[30px]' />
                    <img src={tailwindIcon} alt="tailwind" className='w-[30px]' />
                    <img src={reactjsIcon} alt="reactjs" className='w-[30px]' />
                </div>

                <p>
                    This website contains information about countries such as the country's flag, language, currency, population, etc. In addition, there are 'search' feature and 'filter by region' feature on the website. This project built with React JS and Tailwind CSS stack and an open API "REST Countries".
                </p>
                <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://fascinating-lily-f1ce41.netlify.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/rest-countries-api-with-color-theme-switcher/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </div>
        </LazyLoadComponent>
    
        <LazyLoadComponent>
        <div className="sub-projects flex overflow-hidden bg-gradient-black bg-cover bg-no-repeat lg:bg-none rounded-xl lg:col-span-4"
        data-aos='fade-left' data-aos-offset='300'>
        <div className="project-2 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 rounded-xl">
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-url-shortening-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    URL Shortening Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" className='w-[30px]' />
                    <img src={tailwindIcon} alt="tailwind" className='w-[30px]' />
                    <img src={reactjsIcon} alt="reactjs" className='w-[30px]' />
                </div>

                <p>
                    In this website, user can shorten an url by submitting the original url into the provided input form by the website, and the website will render the shortened urls along with its original url. This project built with React JS and Tailwind CSS stack and an open API "srtcode".
                </p>
                <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://revin-url-shortening-app.netlify.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/url-shortening-app' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
        <div className="sub-projects flex overflow-hidden bg-gradient-black bg-cover bg-no-repeat lg:bg-none rounded-xl lg:col-span-4"
        data-aos='fade-right' data-aos-offset='300'>
        <div className="project-3 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 rounded-xl">
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-ip-address-tracker-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    IP Address Tracker Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" className='w-[30px]' />
                    <img src={tailwindIcon} alt="tailwind" className='w-[30px]' />
                    <img src={jsIcon} alt="js" className='w-[30px]' />
                </div>

                <p>
                    In this website, user can track an IP address and get information such as IP location, timezone, and ISP. This project built with React JS and Tailwind CSS stack and two open APIs "IPify IP Geolocation" & "LeafletJS Map".
                </p>

                <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start w-full">
                
                <a href='https://ip-adress-tracker-one.vercel.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/ip-adress-tracker' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
        <div className="sub-projects flex overflow-hidden bg-gradient-black bg-cover bg-no-repeat lg:bg-none rounded-xl lg:col-span-8"
        data-aos='fade-left' data-aos-offset='300'>
        <div className="project-4 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 rounded-xl">
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-calculator-app-project bg-cover bg-center h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    Calculator App
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" className='w-[30px]' />
                    <img src={tailwindIcon} alt="tailwind" className='w-[30px]' />
                    <img src={jsIcon} alt="js" className='w-[30px]' />
                </div>

                <p>
                    This is a simple calculator app, which can calculate basic math operation such as adding, substracting, multiplying, and dividing. The calculation program built with considerations of error cases such as divide by zero, 0/0, NaN, etc. In addition, this app have 3 different themes which can be toggled with a toggle button.
                </p>

                <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://calculator-app-theta-five.vercel.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/calculator-app' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </div>
        </LazyLoadComponent>
    </div>
  )
}
