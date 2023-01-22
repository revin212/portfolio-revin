import * as React from "react"
import '/src/styles/tailwind.css'
import Layout from '/src/components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <div className="bg-red-500 h-screen">
        Hello world!
      </div>
    </Layout>
  )
}
