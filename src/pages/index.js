import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <main>
        <div className=" bg-main-black text-neutral-white h-screen">
          Hello world!
        </div>
      </main>
    </Layout>
  )
}
