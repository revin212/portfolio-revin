import React from 'react'
import htmlIcon from '../../images/html5-icon.svg'
import tailwindIcon from '../../images/tailwindcss-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import expressjsIcon from '../../images/expressjs-icon.svg'
import mysqlIcon from '../../images/mysql-icon.svg'
import jwtIcon from '../../images/jwt-icon.svg'
import { LazyLoadComponent } from 'react-lazy-load-image-component'


export default function MainProject() {
  return (
    <div className="main-project flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[2rem] mb-[2rem]">
            <div className="project-desc bg-gradient-black bg-cover bg-no-repeat rounded-xl p-[1.5rem] text-center lg:text-left lg:w-full lg:flex lg:flex-col lg:justify-end"
            data-aos='fade-right' data-aos-offset='300'>
              <h3 className=' font-bold text-3xl lg:text-4xl mb-[1.5rem]'>Simple Social Media Website</h3>
              <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <img src={htmlIcon} alt="html" width="30px" height="30px"  />
                <img src={tailwindIcon} alt="tailwind" width="30px" height="30px"  />
                <img src={reactjsIcon} alt="reactjs" width="30px" height="30px"  />
                <img src={expressjsIcon} alt="expressjs" width="60px" height="40px" />
                <img src={mysqlIcon} alt="mysql" width="40px" height="40px" />
                <img src={jwtIcon} alt="jwt" width="30px" height="30px"  />
              </div>
              <div className="desc my-[1.5rem]">
                <p>
                  A simple social media website, which include CRUD features such as register/login, create a post, edit a post, and delete a post. This is a full-stack project that uses React JS, Tailwind CSS, Express JS, and MySql stack, along with other libaries such as JWT, dotenv, and bcrypt. This project deployed on three different platform. The database hosted on 'freesqldatabase.com', the backend hosted on 'cyclic.sh', and the frontend hosted on 'firebase.google.com'.
                </p>
                <div className="buttons flex gap-[1.5rem] justify-center lg:justify-start">
                  <a href='https://simple-social-media-by-revin.firebaseapp.com' target="_blank" rel="noreferrer">
                  <button className='font-semibold text-md mt-[1.5rem] rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Live View</button>
                  </a>

                  <a href='https://github.com/revin212/simple-social-media-with-login' target="_blank" rel="noreferrer">
                  <button className='font-semibold text-md mt-[1.5rem] rounded-xl px-3 py-2 bg-neutral-dark-gray
                   hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Source Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div id='main-project-img' className="project-img bg-gradient-black bg-cover bg-no-repeat rounded-xl p-[1.5rem] h-full lg:w-full"
            data-aos='fade-left' data-aos-offset='300'>
              <LazyLoadComponent>
              <div className="img min-h-[350px] lg:h-full rounded-xl bg-simple-socmed-project bg-cover lg:bg-top bg-no-repeat">
              </div>
              </LazyLoadComponent>
            </div>
    </div>
  )

}
