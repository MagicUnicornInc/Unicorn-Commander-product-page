import React, { useState, useEffect } from 'react'

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4">
      {Object.keys(timeLeft).map(interval => (
        <div key={interval} className="text-center">
          <div className="text-3xl font-bold">{timeLeft[interval]}</div>
          <div className="text-sm">{interval}</div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
