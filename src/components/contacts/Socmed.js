import React from 'react'
import githubIcon from '../../images/github-icon.svg'
import linkedinIcon from '../../images/linkedin-icon.svg'
import instagramIcon from '../../images/instagram-icon.svg'
import frontendmentorIcon from '../../images/frontendmentor-icon.svg'
import leetcodeIcon from '../../images/leetcode-icon.svg'

export default function Socmed() {
  return (
    <div className="socmed my-[5rem] flex flex-col items-center">
      <h2 className='font-bold text-center text-[2.4rem] mb-6' data-aos='fade-down' data-aos-offset='-100'>Find me on</h2>
      <div className="stack-icons w-full flex flex-wrap justify-center items-center gap-10"
            data-aos='fade-left' data-aos-offset='-200'>
        <a href='https://github.com/revin212' target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="github" className='w-[64px]' />
        </a>

        <a href='https://www.linkedin.com/in/revin-dennis-ramadhan' target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="linkedin" className='w-[64px]' />
        </a>

        <a href='https://www.instagram.com/revindr21/' target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="instagram" className='w-[64px]' />
        </a>

        <a href='https://www.frontendmentor.io/profile/revin212' target="_blank" rel="noreferrer">
          <img src={frontendmentorIcon} alt="frontendmentor" className='w-[64px]' />
        </a>

        <a href='https://leetcode.com/revinramadhan' target="_blank" rel="noreferrer">
          <img src={leetcodeIcon} alt="leetcode" className='w-[64px]' />
        </a>
      </div>
    </div>
  )
}
