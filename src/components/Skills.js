import React from 'react'
import htmlIcon from '../images/html5-icon.svg'
import cssIcon from '../images/css-icon.svg'
import jsIcon from '../images/javascript-icon.svg'
import sassIcon from '../images/sass-icon.svg'
import tailwindIcon from '../images/tailwindcss-icon.svg'
import reactjsIcon from '../images/reactjs-icon.svg'
import gatsbyjsIcon from '../images/gatsbyjs-icon.svg'
import nodejsIcon from '../images/nodejs-icon.svg'
import expressjsIcon from '../images/expressjs-icon.svg'
import mysqlIcon from '../images/mysql-icon.svg'
import jwtIcon from '../images/jwt-icon.svg'
import sequelizeIcon from '../images/sequelize-icon.svg'
import gitIcon from '../images/git-icon.svg'
import figmaIcon from '../images/figma-icon.svg'
import canvaIcon from '../images/canva-icon.svg'
import wordpressIcon from '../images/wordpress-icon.svg'

export default function Skills() {
  return (
    <div>
        <div className="skills-content max-w-[1132px] mx-auto">
            <h2 className='skills-title font-bold text-[2.8rem] text-center mb-[1.5rem] lg:mb-[3rem]'
                data-aos='fade-down'>
                SKILLS
            </h2>
            <div className="skills-list bg-gradient-black bg-cover bg-right-bottom bg-no-repeat p-4 rounded-lg lg:flex lg:justify-between">
              <div className="front-end mb-[3rem] lg:mb-4 lg:w-[30%]" data-aos='fade-right'>
                <h2 className='font-semibold text-center text-[1.5rem] mb-4'>Front End</h2>
                <div className="stack-icons w-full flex flex-wrap justify-center gap-4">
                  <img src={htmlIcon} alt="html" />
                  <img src={cssIcon} alt="css" />
                  <img src={jsIcon} alt="javascript" className='w-[64px]' />
                  <img src={sassIcon} alt="sass" className='w-[64px]' />
                  <img src={tailwindIcon} alt="tailwind" className='w-[64px]' />
                  <img src={reactjsIcon} alt="react-js" className='w-[64px]' />
                  <img src={gatsbyjsIcon} alt="gatsby-js" className='w-[64px]' />
                </div>
              </div>

              <div className="back-end mb-[3rem] lg:mb-4 lg:w-[30%]" data-aos='fade-right'>
                <h2 className='font-semibold text-center text-[1.5rem] mb-4'>Back End</h2>
                <div className="stack-icons w-full flex flex-wrap justify-center gap-4">
                  <img src={nodejsIcon} alt="node-js" className='w-[64px]' />
                  <img src={expressjsIcon} alt="express-js" className='w-[100px]' />
                  <img src={mysqlIcon} alt="mysql" className='w-[64px]' />
                  <img src={jwtIcon} alt="jwt" className='w-[64px]' />
                  <img src={sequelizeIcon} alt="sequelize" className='w-[64px] h-[64px]' />
                </div>
              </div>

              <div className="other-stack mb-[3rem] lg:mb-4 lg:w-[30%]" data-aos='fade-right'>
                <h2 className='font-semibold text-center text-[1.5rem] mb-4'>Other Tools</h2>
                <div className="stack-icons w-full flex flex-wrap justify-center gap-4">
                  <img src={gitIcon} alt="git" className='w-[64px]' />
                  <img src={figmaIcon} alt="figma" className='w-[64px]' />
                  <img src={canvaIcon} alt="canva" className='w-[64px]' />
                  <img src={wordpressIcon} alt="wordpress" className='w-[64px]' />
                </div>
              </div>
                
            </div>
        </div>
    </div>
  )
}
