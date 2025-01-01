import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FoundersEdition from '../components/FoundersEdition'
import WaitlistSignup from '../components/WaitlistSignup'
import FAQ from '../components/FAQ'

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <FoundersEdition />
      <WaitlistSignup />
      <FAQ />
    </main>
  )
}

export default HomePage
