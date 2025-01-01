import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: "What makes Unicorn Commander different?",
      answer: "Own it forever—no subscriptions or hidden fees. Total privacy and control over your data."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes! Features scale as your business grows."
    },
    {
      question: "What if I need help?",
      answer: "We offer support plans starting at $499/month for professional assistance."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-purple-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-purple-200">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
