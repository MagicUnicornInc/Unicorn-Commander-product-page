import React from 'react'

function FoundersEdition() {
  return (
    <section id="pricing" className="py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="card border-primary/20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
            Founders Edition Pre-Order
          </h2>
          <div className="text-center mb-12">
            <div className="text-6xl font-bold mb-4 text-primary">$15,000</div>
            <div className="text-xl text-gray-300">497 / 500 Remaining</div>
          </div>
          <ul className="space-y-6 mb-12">
            {[
              'Ships February 14th, 2024',
              'Free Hosting for 1 Year ($1,200 value)',
              'Limited Founder Perks'
            ].map((perk, index) => (
              <li key={index} className="flex items-center text-lg text-gray-300">
                <span className="mr-4 text-primary">✨</span>
                {perk}
              </li>
            ))}
          </ul>
          <button className="btn-primary w-full">
            Pre-Order Now - $1,000 Deposit
          </button>
        </div>
      </div>
    </section>
  )
}

export default FoundersEdition
