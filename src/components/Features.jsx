import React from 'react'

function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Own your data completely"
    },
    {
      icon: "⚡",
      title: "Blazing Fast AI",
      description: "Automate workflows in seconds"
    },
    {
      icon: "🌟",
      title: "Content Creation",
      description: "AI tools for ads and graphics"
    },
    {
      icon: "🚀",
      title: "No Recurring Costs",
      description: "Pay once, own forever"
    }
  ]

  return (
    <section id="features" className="py-32 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 gradient-text">
          Why Unicorn Commander?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:transform hover:scale-105">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
