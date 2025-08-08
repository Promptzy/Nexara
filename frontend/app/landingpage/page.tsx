import React from 'react'
import Navbar from './section/Navbar'
import Home from './section/Home'
import HomeContent from './section/HomeContent'
import Features from './section/Features'
import Footer from './section/Footer'
import Threads from './components/Threads'

const page = () => {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section with Threads Background */}
      <div className="relative">
        <div className="fixed inset-0 w-full h-full z-0">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="relative z-10">
          <Navbar />
          <Home />
        </div>
      </div>
      
      {/* Rest of the content with different background */}
      <div className="relative z-10 bg-black">
        <HomeContent />
        <Features />
        <Footer />
      </div>
    </main>
  )
}

export default page
