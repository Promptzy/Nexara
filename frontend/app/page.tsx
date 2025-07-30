import React from 'react'

import Features from '../components/Features'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main className="min-h-screen">
      <Features />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default page
