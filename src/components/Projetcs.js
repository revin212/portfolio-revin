import React from 'react'
import MainProject from './projects/MainProject'
import SubProjects from './projects/SubProjects'


export default function Projetcs() {
  return (
    <div id='projects' className='projects-section w-full bg-main-black px-[1.2rem] lg:px-[2rem] py-[4rem]'>
        <div className="projects-wrapper max-w-[1132px] mx-auto">
        <h2 className='projects-title font-bold text-[2.8rem] text-center mb-[1.5rem] lg:mb-[3rem]'>
                PROJECTS
        </h2>
        <MainProject />
        <SubProjects />
        </div>
    </div>
  )
}
