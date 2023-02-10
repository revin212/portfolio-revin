import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'
import Hero from '/src/components/Hero.js'
import Skills from "../components/Skills"
import Projetcs from "../components/Projetcs"
import Contact from "../components/Contact"
import { Helmet } from "react-helmet"
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from "react"


export default function Home() {
  // useEffect(()=>{
  //   AOS.init({
  //     once: true,
  //     duration: 1700,
  //   })
  // }, [])


  return (
    <Layout>
      <Helmet>
        <title>Revin's Portfolio</title>
      </Helmet>
      <main id="main-content" className=" text-neutral-white">
        <div className='hero-section overflow-hidden bg-gradient-blue bg-cover bg-no-repeat
    mt-[4.5rem] w-full'>
          <Hero />
        </div>
        <div id='skills' className='skills-section overflow-hidden w-full bg-main-black px-[1.2rem] lg:px-[2rem] py-[4rem]'>
          <Skills />
        </div>
        <div id='projects' className='projects-section overflow-hidden w-full bg-main-black px-[1.2rem] lg:px-[2rem] py-[4rem]'>
          <Projetcs />
        </div>
        <div id='contact' className='contact-section overflow-hidden bg-gradient-blue bg-cover bg-no-repeat w-full px-[1.2rem] lg:px-[2rem] pt-[4rem] pb-[6rem]'>
          <Contact />
        </div>
      </main>
    </Layout>
  )
}
