import React from 'react'
import MainProject from './projects/MainProject'
import SubProjects from './projects/SubProjects'


export default function Projetcs() {
  return (
    <div>
        <div className="projects-wrapper max-w-[1132px] mx-auto mb-[3rem]">
        <h2 className='projects-title font-bold text-[2.8rem] text-center mb-[1.5rem] lg:mb-[3rem]'
            data-aos='fade-down' data-aos-offset='200'>
                PROJECTS
        </h2>
        <MainProject />
        <SubProjects />
        </div>
    </div>
  )
}
