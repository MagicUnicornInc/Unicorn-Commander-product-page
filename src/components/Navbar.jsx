import React from 'react'

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">🦄 Unicorn Commander</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Pricing', 'Waitlist', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
