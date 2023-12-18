import React from 'react'
import htmlIcon from '../../images/html5-icon.svg'
import tailwindIcon from '../../images/tailwindcss-icon.svg'
import reactjsIcon from '../../images/reactjs-icon.svg'
import jsIcon from '../../images/javascript-icon.svg'
import expressjsIcon from '../../images/expressjs-icon.svg'
import mysqlIcon from '../../images/mysql-icon.svg'
import jwtIcon from '../../images/jwt-icon.svg'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export default function SubProjects() {
  return (
    <div className='grid grid-cols-1 gap-[1rem] lg:grid-cols-12'>
        <LazyLoadComponent>
        <div className="project-3 px-6 py-8 lg:col-span-4 overflow-hidden bg-gradient-black bg-cover bg-no-repeat w-full shrink-0 rounded-xl"
        data-aos='fade-right' data-aos-offset='300'>
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-ip-address-tracker-project bg-cover bg-no-repeat lg:h-full rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    IP Address Tracker Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" width="30px" height="30px" />
                    <img src={tailwindIcon} alt="tailwind" width="30px" height="30px" />
                    <img src={jsIcon} alt="js" width="30px" height="30px" />
                </div>

                <p>
                    In this website, user can track an IP address and get information such as IP location, timezone, and ISP. This project built with React JS and Tailwind CSS stack and two open APIs "IPify IP Geolocation" & "LeafletJS Map".
                </p>

                <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start w-full">
                
                <a href='https://ip-adress-tracker-one.vercel.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/ip-adress-tracker' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </LazyLoadComponent>
        <LazyLoadComponent>
        <div className="project-4 lg:col-span-8 overflow-hidden px-6 py-8 bg-gradient-black bg-cover bg-no-repeat w-full shrink-0 rounded-xl"
        data-aos='fade-left' data-aos-offset='300'>
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-simple-socmed-project bg-cover bg-center bg-no-repeat lg:h-full rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    Simple Social Media Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" width="30px" height="30px"  />
                    <img src={tailwindIcon} alt="tailwind" width="30px" height="30px"  />
                    <img src={reactjsIcon} alt="reactjs" width="30px" height="30px"  />
                    <img src={expressjsIcon} alt="expressjs" width="60px" height="40px" />
                    <img src={mysqlIcon} alt="mysql" width="40px" height="40px" />
                    <img src={jwtIcon} alt="jwt" width="30px" height="30px"  />
                </div>

                <p>
                    A simple social media website, which include CRUD features such as register/login, create a post, edit a post, and delete a post. This is a full-stack project that uses React JS, Tailwind CSS, Express JS, and MySql stack, along with other libaries such as JWT, dotenv, and bcrypt. This project deployed on three different platform. The database hosted on 'freesqldatabase.com', the backend hosted on 'cyclic.sh', and the frontend hosted on 'firebase.google.com'.
                </p>

                <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://simple-social-media-by-revin.firebaseapp.com' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/simple-social-media-with-login' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
        <div className="project-1 px-6 py-8 lg:col-span-8 overflow-hidden bg-gradient-black bg-cover bg-no-repeat w-full shrink-0  rounded-xl"
        data-aos='fade-right' data-aos-offset='300'>
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-rest-countries-project bg-cover bg-no-repeat bg-top lg:h-full rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    Rest Countries API Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" width="30px" height="30px" />
                    <img src={tailwindIcon} alt="tailwind" width="30px" height="30px" />
                    <img src={reactjsIcon} alt="reactjs" width="30px" height="30px" />
                </div>

                <p>
                    This website contains information about countries such as the country's flag, language, currency, population, etc. In addition, there are 'search' feature and 'filter by region' feature on the website. This project built with React JS and Tailwind CSS stack and an open API "REST Countries".
                </p>
                <div className="buttons flex flex-col gap-[0.8rem] lg:flex-row lg:gap-[1.5rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://fascinating-lily-f1ce41.netlify.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/rest-countries-api-with-color-theme-switcher/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </LazyLoadComponent>
    
        <LazyLoadComponent>
        <div className="project-2 px-6 py-8 lg:col-span-4 overflow-hidden bg-gradient-black bg-cover bg-no-repeat w-full shrink-0 rounded-xl"
        data-aos='fade-left' data-aos-offset='300'>
            <div className="project-wrapper flex flex-col justify-end bg-black bg-opacity-80 bg-blend-overlay bg-url-shortening-project bg-cover bg-no-repeat lg:h-full rounded-lg overflow-hidden p-4">
                <h3 className=' font-semibold text-2xl mb-4'>
                    URL Shortening Website
                </h3>

                <div className="stacks text-sm flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-2">
                    <img src={htmlIcon} alt="html" width="30px" height="30px" />
                    <img src={tailwindIcon} alt="tailwind" width="30px" height="30px" />
                    <img src={reactjsIcon} alt="reactjs" width="30px" height="30px" />
                </div>

                <p>
                    In this website, user can shorten an url by submitting the original url into the provided input form by the website, and the website will render the shortened urls along with its original url. This project built with React JS and Tailwind CSS stack and an open API "srtcode".
                </p>
                <div className="buttons flex flex-col gap-[0.8rem] mt-[1.5rem] justify-center lg:justify-start">
                
                <a href='https://revin-url-shortening-app.netlify.app/' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Live View</button>
                </a>

                <a href='https://github.com/revin212/url-shortening-app' target="_blank" rel="noreferrer">
                <button className='font-semibold w-full text-md rounded-xl px-3 py-2 bg-neutral-dark-gray
                hover:bg-neutral-400 hover:text-main-black lg:transition-colors lg:duration-200'>Source Code</button>
                </a>
                </div>
            </div>
        </div>
        </LazyLoadComponent>
    </div>
  )
}
