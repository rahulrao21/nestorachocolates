import React, { useState, useEffect } from 'react'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice about cookies
    const cookieChoice = localStorage.getItem('cookieChoice')
    if (!cookieChoice) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieChoice', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieChoice', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-dark-green-800 text-white p-4 shadow-lg z-50"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex-1 mb-4 sm:mb-0">
          <h2 id="cookie-banner-title" className="sr-only">Cookie Policy</h2>
          <p id="cookie-banner-description" className="text-sm">
            We use cookies to enhance your browsing experience and provide personalized content.
            <button 
              type="button"
              className="text-gold-400 hover:text-gold-300 ml-1 underline focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-dark-green-800 rounded"
              onClick={() => {
                // In a real implementation, this would open a cookie policy modal
                alert('Cookie Policy: We use essential cookies for website functionality and analytics cookies to understand user behavior. You can manage your preferences at any time.')
              }}
              aria-label="Learn more about our cookie policy"
            >
              Learn more
            </button>
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAccept}
            className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-dark-green-800"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="border border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-dark-green-800"
            aria-label="Decline cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner