import React from 'react'
import htmlIcon from '../../images/html5-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import mysqlIcon from '../../images/mysql-icon.svg'
import jwtIcon from '../../images/jwt-icon.svg'
import netCoreIcon from '../../images/net-core-icon.svg'
import materialuiIcon from '../../images/material-ui-icon.svg'
import { LazyLoadComponent } from 'react-lazy-load-image-component'


export default function MainProject() {
  return (
    <div className="main-project flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[2rem] mb-[2rem]">
            <div className="project-desc bg-gradient-black bg-cover bg-no-repeat rounded-xl p-[1.5rem] text-center lg:text-left lg:w-full lg:flex lg:flex-col lg:justify-end"
            data-aos='fade-right' data-aos-offset='300'>
              <h3 className=' font-bold text-3xl lg:text-4xl mb-[1.5rem]'>Apel Music : E-commerce website for musical instruments courses</h3>
              <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <img src={htmlIcon} alt="html" width="30px" height="30px"  />
                <img src={materialuiIcon} alt="tailwind" width="30px" height="30px"  />
                <img src={reactjsIcon} alt="reactjs" width="30px" height="30px"  />
                <img src={netCoreIcon} alt="expressjs" width="35px" height="35px" />
                <img src={mysqlIcon} alt="mysql" width="40px" height="40px" />
                <img src={jwtIcon} alt="jwt" width="30px" height="30px"  />
              </div>
              <div className="desc my-[1.5rem]">
                <p>
                  An e-commerce website for musical instruments courses, which include explore courses, explore category, add to cart, buy now, checkout, and invoice list features as well as CRUD Admin Panel features with authentication and authorization. This is a full-stack project that uses React JS, Material UI, ASP .NET Core with ADO.NET, and MySql stack, along with other libaries such as JWT, Mailkit, and bcrypt. This project is a final project of coding.id bootcamp program, and I worked with 1 teammate to complete the project. This project deployed on coding.id internal server.
                </p>
                <div className="buttons flex flex-col lg:flex-row gap-[0.8rem] lg:gap-[1rem] mt-[1.5rem] justify-center lg:justify-start w-full">
                  <a href='http://52.237.194.35:2029/' target="_blank" rel="noreferrer">
                  <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200 w-full'>Live View</button>
                  </a>

                  <a href='https://gitlab.com/teruboi1/fs-12-team-1' target="_blank" rel="noreferrer">
                  <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200 w-full'>Source Code FE</button>
                  </a>
                  <a href='https://gitlab.com/teruboi1/fs-12-team-1-be' target="_blank" rel="noreferrer">
                  <button className='font-semibold text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200 w-full'>Source Code BE</button>
                  </a>
                </div>
              </div>
            </div>

            <div id='main-project-img' className="project-img bg-gradient-black bg-cover bg-no-repeat rounded-xl p-[1.5rem] h-full lg:w-full"
            data-aos='fade-left' data-aos-offset='300'>
              <LazyLoadComponent>
              <div className="img min-h-[350px] lg:h-full rounded-xl bg-apel-music-project bg-cover lg:bg-top bg-no-repeat">
              </div>
              </LazyLoadComponent>
            </div>
    </div>
  )

}
