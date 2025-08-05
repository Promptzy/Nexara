import React from 'react'
import Navbar from './section/Navbar'
import Home from './section/Home'
import Features from './section/Features'
import Threads from './components/Threads'

const page = () => {
  return (
    <main className="bg-black min-h-screen relative">
      <div className="fixed inset-0 w-full h-full z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Features />
      </div>
    </main>
  )
}

export default page
