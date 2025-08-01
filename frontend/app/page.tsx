import React from 'react'

import Features from '../components/Features'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import NavBar from '@/components/NavBar'

const Page = () => {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="mt-[-5rem]">
        <Features />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}

export default Page
