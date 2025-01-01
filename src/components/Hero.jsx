import React from 'react'
import CountdownTimer from './CountdownTimer'
import UnitCounter from './UnitCounter'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="mb-6 text-6xl font-bold gradient-text">
          Take Command. Automate. Dominate.
        </h1>
        <p className="mb-12 text-2xl text-gray-300">
          The AI Operations Hub You Own Forever. No Subscriptions. No Limits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="btn-primary">
            Pre-Order Founders Edition
          </button>
          <button className="btn-secondary">
            Join Hosted Beta Waitlist
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <CountdownTimer targetDate="2024-02-14" />
          <UnitCounter initial={497} total={500} />
        </div>
      </div>
    </section>
  )
}

export default Hero
