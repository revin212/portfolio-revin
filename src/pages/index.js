import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'
import Hero from '/src/components/Hero.js'

export default function Home() {
  return (
    <Layout isHomePage = {true}>
      <main>
        <Hero />
      </main>
    </Layout>
  )
}
