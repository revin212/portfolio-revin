import React, { useState } from 'react'
import leftBtn from '../../images/arrow-left.svg'
import rightBtn from '../../images/arrow-right.svg'
import { useEffect } from 'react'
import { useRef } from 'react';

import htmlIcon from '../../images/html5-icon.svg'
import tailwindIcon from '../../images/tailwindcss-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import jsIcon from '../../images/javascript-icon.svg'

export default function SubProjects() {
  const projectsList = [
    {
        element(index) { return (
        <div key={index} className="project-1 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-8 rounded-xl">
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
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-2 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-4 rounded-xl">
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
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-3 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-4 rounded-xl">
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
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-4 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-8 rounded-xl">
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
        </div>)}
    }
  ];
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);
  const [projectNum, setProjectNum] = useState(0);
  const mobileSubProject = useRef();

  const prevProject = () => {
    if(mobileSubProject.current.classList.contains('active')){
        mobileSubProject.current.classList.remove('active');
        mobileSubProject.current.classList.add('changing');
    }else if(mobileSubProject.current.classList.contains('changing')){
        mobileSubProject.current.classList.remove('changing');
        mobileSubProject.current.classList.add('active');
    }

    if(projectNum === 0){
        setProjectNum(3)
    } else {
        setProjectNum(projectNum - 1)
    }
  }

  const nextProject = () => {
    if(mobileSubProject.current.classList.contains('active')){
        mobileSubProject.current.classList.remove('active');
        mobileSubProject.current.classList.add('changing');
    }else if(mobileSubProject.current.classList.contains('changing')){
        mobileSubProject.current.classList.remove('changing');
        mobileSubProject.current.classList.add('active');
    }

    if(projectNum === 3){
        setProjectNum(0)
    } else {
        setProjectNum(projectNum + 1)
    }
  }

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(min-width: 1024px)")
    setIsDesktopScreen(mediaWatcher.matches)
  }, [])

  useEffect(() => {
    // media watcher, for resetting the image slider margin when the screen is desktop
    const mediaWatcher = window.matchMedia("(min-width: 1024px)")

    // watch for updates
    function updateIsDesktopScreen(e) {
      setIsDesktopScreen(e.matches);
    }

    mediaWatcher.addEventListener('change', updateIsDesktopScreen)

    // clean up event listener
    return () => {
      mediaWatcher.removeEventListener('change', updateIsDesktopScreen)
    }
  })

  return (
    <div className="sub-projects relative flex overflow-hidden lg:grid lg:grid-cols-12 lg:gap-[1rem] bg-gradient-black lg:bg-none rounded-xl"
    data-aos='fade-left' data-aos-offset='300'>
            {isDesktopScreen&&
                projectsList.map((project, index) => {
                    return (
                            project.element(index)
                    )
                })
            }
            {!isDesktopScreen&&
                <div ref={mobileSubProject} id='mobileSubProject' className='active'>
                    {projectsList[projectNum].element()}
                </div>
            }

            <button onClick={prevProject} className='left-btn lg:hidden rounded-full opacity-40 hover:opacity-100 flex justify-center items-center w-[45px] h-[45px] absolute top-[45%] left-[-10px]'>
                <img src={leftBtn} alt="left-btn" className='w-[35px] translate-x-[-2px]' />
            </button>
            <button onClick={nextProject} className='right-btn lg:hidden rounded-full opacity-40 hover:opacity-100 flex justify-center items-center w-[45px] h-[45px] absolute top-[45%] right-[-10px]'>
                <img src={rightBtn} alt="right-btn" className='w-[35px] translate-x-[2px]' />
            </button>
    </div>
  )
}
