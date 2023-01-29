import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'
import Hero from '/src/components/Hero.js'
import Skills from "../components/Skills"
import Projetcs from "../components/Projetcs"

export default function Home() {
  return (
    <Layout>
      <main id="main-content" className=" text-neutral-white">
        <Hero />
        <Skills />
        <Projetcs />
      </main>
    </Layout>
  )
}
