import React from 'react'
import htmlIcon from '../../images/html5-icon.svg'
// import cssIcon from '../../images/css-icon.svg'
// import jsIcon from '../../images/javascript-icon.svg'
// import sassIcon from '../../images/sass-icon.svg'
import tailwindIcon from '../../images/tailwindcss-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import expressjsIcon from '../../images/expressjs-icon.svg'
import mysqlIcon from '../../images/mysql-icon.svg'


export default function MainProject() {
  return (
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
                   hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Live View</button>
                  <button className='font-semibold text-md mt-[1.5rem] rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black transition-colors duration-200'>Source Code</button>
                </div>
              </div>
            </div>
    </div>
  )
}
