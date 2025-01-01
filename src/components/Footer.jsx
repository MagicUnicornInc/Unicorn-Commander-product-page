import React from 'react'

function Footer() {
  return (
    <footer className="bg-purple-900/50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-purple-200">
            © 2025 Magic Unicorn Inc. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="text-sm text-purple-200 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-sm text-purple-200 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
