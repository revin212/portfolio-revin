import React, { useState } from 'react'
import htmlIcon from '../images/html5-icon.svg'
import cssIcon from '../images/css-icon.svg'
import jsIcon from '../images/javascript-icon.svg'
import sassIcon from '../images/sass-icon.svg'
import tailwindIcon from '../images/tailwindcss-icon.svg'
import reactjsIcon from '../images/reactjs-icon.svg'
import expressjsIcon from '../images/expressjs-icon.svg'
import mysqlIcon from '../images/mysql-icon.svg'
import leftBtn from '../images/arrow-left.svg'
import rightBtn from '../images/arrow-right.svg'
import { useRef } from 'react'
import { useEffect } from 'react'


export default function Projetcs() {
  //const [projectNum, setProjectNum] = useState(1);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);
  const imgSlider = {
    1: '0',
    2: '-100%',
    3: '-200%',
    4: '-300%',
  }
  const projectRef = useRef(); 
  let projectNum = 1;
  //console.log(projectNum)


  const prevProject = () => {
    if(projectNum === 1){
      //setProjectNum(4)
      projectNum = 4
    } else {
      //setProjectNum(projectNum - 1)
      projectNum -= 1
    }
    projectRef.current.style.marginLeft = imgSlider[projectNum]
    //console.log(projectNum)
  }

  const nextProject = () => {
    if(projectNum === 4){
      //setProjectNum(1)
      projectNum = 1
    } else {
      // setProjectNum(projectNum + 1)
      projectNum += 1
    }
    projectRef.current.style.marginLeft = imgSlider[projectNum]
    //console.log(projectNum)
  }

  useEffect(() => {
    // media watcher, for resetting the image slider margin when the screen is desktop
    const mediaWatcher = window.matchMedia("(min-width: 1024px)")
    
    // watch for updates
    function updateIsDesktopScreen(e) {
      setIsDesktopScreen(e.matches);
    }

    mediaWatcher.addEventListener('change', updateIsDesktopScreen)

    // clean image slider margin on desktop
    if(setIsDesktopScreen){
      projectRef.current.style.marginLeft = '0';
    }

    // clean up event listener
    return () => {
      mediaWatcher.removeEventListener('change', updateIsDesktopScreen)
    }
  })
  

  return (
    <div id='projects' className='projects-section w-full bg-main-black px-[1.2rem] lg:px-[2rem] py-[4rem]'>
        <div className="projects-wrapper max-w-[1132px] mx-auto">
        <h2 className='projects-title font-bold text-[2.8rem] text-center mb-[1.5rem] lg:mb-[3rem]'>
                PROJECTS
            </h2>
        <div className="main-project flex flex-col lg:flex-row-reverse lg:items-start gap-[2rem] mb-[2rem]">
            <div className="project-img bg-gradient-black bg-cover bg-no-repeat h-[300px] lg:h-[345px] rounded-xl p-[1.5rem] lg:w-1/2">
              <div className="img">

              </div>
            </div>
            <div className="project-desc bg-gradient-black bg-cover bg-no-repeat rounded-xl p-[1.5rem] text-center lg:text-left lg:w-1/2">
              <h3 className=' font-bold text-3xl mb-[1.5rem]'>Project Title</h3>
              <div className="stacks text-sm flex flex-wrap gap-4 justify-center lg:justify-start">
                <img src={htmlIcon} alt="html" className='w-[30px]' />
                <img src={tailwindIcon} alt="tailwind" className='w-[30px]' />
                <img src={reactjsIcon} alt="reactjs" className='w-[30px]' />
                <img src={expressjsIcon} alt="expressjs" className='w-[60px]' />
                <img src={mysqlIcon} alt="mysql" className='w-[40px]' />
              </div>
              <div className="desc my-[1.5rem]">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt corrupti libero ipsam earum, dolore non! Quisquam aliquid qui iste, nobis sequi in, repellendus, adipisci nulla architecto expedita perspiciatis illo at.</p>
                <div className="buttons flex gap-[1.5rem] justify-center lg:justify-start">
                  <button className='font-semibold text-md mt-[1.5rem] rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black transition-colors duration-300'>Live View</button>
                  <button className='font-semibold text-md mt-[1.5rem] rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black transition-colors duration-300'>Source Code</button>
                </div>
              </div>
            </div>
        </div>
        <div className="sub-projects relative flex overflow-hidden lg:grid lg:grid-cols-12 lg:gap-[1rem] bg-gradient-black lg:bg-none rounded-xl">
            <div ref={projectRef} className="project-1 bg-gradient-black bg-cover bg-no-repeat h-[400px] w-full shrink-0 lg:col-span-8 rounded-xl">Project 1</div>
            <div className="project-2 bg-gradient-black bg-cover bg-no-repeat h-[400px] w-full shrink-0 lg:col-span-4 rounded-xl">Project 2</div>
            <div className="project-3 bg-gradient-black bg-cover bg-no-repeat h-[400px] w-full shrink-0 lg:col-span-4 rounded-xl">Project 3</div>
            <div className="project-4 bg-gradient-black bg-cover bg-no-repeat h-[400px] w-full shrink-0 lg:col-span-8 rounded-xl">Project 4</div>
            <button onClick={prevProject} className='left-btn lg:hidden rounded-full bg-neutral-400 opacity-40 hover:opacity-100 flex justify-center items-center w-[45px] h-[45px] absolute top-[45%]'>
                <img src={leftBtn} alt="left-btn" className='w-[30px] translate-x-[-2px]' />
            </button>
            <button onClick={nextProject} className='right-btn lg:hidden rounded-full bg-neutral-400 opacity-40 hover:opacity-100 flex justify-center items-center w-[45px] h-[45px] absolute top-[45%] right-0'>
                <img src={rightBtn} alt="right-btn" className='w-[30px] translate-x-[2px]' />
            </button>
        </div>
        </div>
    </div>
  )
}
