'use client'
import React from 'react'
import CTASection from '@/components/AboutUsComponents/CTASection'
import FeaturesSection from '@/components/AboutUsComponents/FeaturesSection'
import Footer from '@/components/AboutUsComponents/Footer'
import GalaxyBackground from '@/components/AboutUsComponents/GalaxyBackground'
import HeroSection from '@/components/AboutUsComponents/HeroSection'
import MissionSection from '@/components/AboutUsComponents/MissionSection'
import PlatformShowcase from '@/components/AboutUsComponents/PlatformShowcase'
import TeamSection from '@/components/AboutUsComponents/TeamSection'
import TimelineSection from '@/components/AboutUsComponents/TimelineSection'
import NavBar from '@/components/NavBar'

const AboutUsContent = () => {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <GalaxyBackground />
      <div className="relative z-10">
        <HeroSection />
        <MissionSection />
        <FeaturesSection />
        <PlatformShowcase />
        <TimelineSection />
        <TeamSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}

const AboutUsPage = () => {
  return <AboutUsContent />
}

export default AboutUsPage
