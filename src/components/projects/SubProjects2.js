import React, { useState } from 'react'
import leftBtn from '../../images/arrow-left.svg'
import rightBtn from '../../images/arrow-right.svg'
import { useEffect } from 'react'
import { useRef } from 'react';

export default function SubProjects2() {
  const projectsList = [
    {
        element(index) { return (
        <div key={index} className="project-1 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-8 rounded-xl">
                <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-rest-countries-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                    <h3 className=' font-semibold text-2xl mb-6'>
                        Rest Countries API Website
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cupiditate autem excepturi expedita veritatis nobis.
                    </p>
                    <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                    </div>
                </div>
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-2 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-4 rounded-xl">
                <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-url-shortening-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                    <h3 className=' font-semibold text-2xl mb-6'>
                        URL Shortening Website
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cupiditate autem excepturi expedita veritatis nobis.
                    </p>
                    <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start">
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                    </div>
                </div>
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-3 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-4 rounded-xl">
                <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-ip-address-tracker-project bg-cover h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                    <h3 className=' font-semibold text-2xl mb-6'>
                        IP Address Tracker Website
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cupiditate autem excepturi expedita veritatis nobis.
                    </p>
                    <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start">
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                    </div>
                </div>
        </div>)}
    },
    {
        element(index) {return (
        <div key={index} className="project-4 px-6 py-8 bg-gradient-black bg-no-repeat w-full shrink-0 lg:col-span-8 rounded-xl">
                <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-calculator-app-project bg-cover bg-center h-full bg-no-repeat rounded-lg overflow-hidden p-4">
                    <h3 className=' font-semibold text-2xl mb-6'>
                        Calculator App
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cupiditate autem excepturi expedita veritatis nobis.
                    </p>
                    <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                    <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                    hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
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

    //console.log(projectNum)
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
    // console.log(projectNum)

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
    // setIsDesktopScreen(mediaWatcher.matches)
    // watch for updates
    function updateIsDesktopScreen(e) {
      setIsDesktopScreen(e.matches);
    }

    mediaWatcher.addEventListener('change', updateIsDesktopScreen)
    // mediaWatcher.addEventListener('load', updateIsDesktopScreen)

    // clean up event listener
    return () => {
      mediaWatcher.removeEventListener('change', updateIsDesktopScreen)
    //   mediaWatcher.addEventListener('load', updateIsDesktopScreen)
    }
  })

  return (
    <div className="sub-projects relative flex overflow-hidden lg:grid lg:grid-cols-12 lg:gap-[1rem] bg-gradient-black lg:bg-none rounded-xl">
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
