import React, { useState } from 'react'

function WaitlistSignup() {
  const [email, setEmail] = useState('')
  const [betaTester, setBetaTester] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, betaTester }),
      })
      if (response.ok) {
        alert('Successfully joined the waitlist!')
        setEmail('')
        setBetaTester(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to join waitlist. Please try again.')
    }
  }

  return (
    <section id="waitlist" className="py-32 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">
          Prefer a Hosted Solution? Get Early Access.
        </h2>
        <p className="mb-12 text-xl text-gray-300">
          Join our waitlist and be the first to try Unicorn Commander in the cloud.
        </p>
        <form onSubmit={handleSubmit} className="card space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input"
            required
          />
          <label className="flex items-center justify-center space-x-3 text-gray-300">
            <input
              type="checkbox"
              checked={betaTester}
              onChange={(e) => setBetaTester(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span>I'm interested in being a beta tester</span>
          </label>
          <button type="submit" className="btn-primary w-full">
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  )
}

export default WaitlistSignup
