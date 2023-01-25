import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
    <div className='text-2xl font-main-poppins text-neutral-white bg-main-black w-full min-h-screen p-8'>
        <h2 className='font-bold'>404</h2>
        <p>Sorry, page doesn't exist</p>
    </div>
    </Layout>
  )
}
