import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'
import Hero from '/src/components/Hero.js'
import Skills from "../components/Skills"

export default function Home() {
  return (
    <Layout isHomePage = {true}>
      <main className=" text-neutral-white">
        <Hero />
        <Skills />
      </main>
    </Layout>
  )
}
