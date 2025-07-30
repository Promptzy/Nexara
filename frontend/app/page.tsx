import React from 'react'

import Features from '../components/Features'
import Footer from '../components/Footer'
import NavBar from '@/components/NavBar'

const page = () => {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="mt-[-5rem]">
        <Features />
        <Footer />
      </div>
    </main>
  )
}

export default page

{
}
