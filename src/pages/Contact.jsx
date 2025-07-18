import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } catch (error) {
        console.error('Error submitting form:', error)
        setErrors({ submit: 'There was an error sending your message. Please try again.' })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Nestora Inc. - Get in Touch | Premium Sugar-Free Chocolates</title>
        <meta name="description" content="Contact Nestora Inc. for questions about our premium sugar-free Dubai chocolates. Email: info@nestorainc.com" />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-6">
                Send us a Message
              </h2>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Message sent successfully!
                      </h3>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for your message. We will get back to you within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{errors.submit}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-vertical ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    } ${isSubmitting ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                    placeholder="Tell us about your inquiry, questions, or feedback..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gold-600 hover:bg-gold-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-dark-green-50 to-dark-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Email</h3>
                    <p className="text-gray-700">info@nestorainc.com</p>
                    <p className="text-sm text-gray-600 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Website</h3>
                    <p className="text-gray-700">nestorainc.com</p>
                    <p className="text-sm text-gray-600 mt-1">Visit us online for more information</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">🇨🇦</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Service Area</h3>
                    <p className="text-gray-700">Canada-wide delivery</p>
                    <p className="text-sm text-gray-600 mt-1">Premium chocolates delivered across Canada</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Response Time</h3>
                    <p className="text-gray-700">24-48 hours</p>
                    <p className="text-sm text-gray-600 mt-1">Monday to Friday, business hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-dark-green-800 mb-3">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-dark-green-800">How long does shipping take?</p>
                    <p className="text-gray-600">Typically 3-5 business days across Canada</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-green-800">Are your chocolates really sugar-free?</p>
                    <p className="text-gray-600">Yes, all our chocolates are completely sugar-free</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-green-800">Do you offer bulk orders?</p>
                    <p className="text-gray-600">Yes, visit our <a href="/wholesale" className="text-gold-600 hover:text-gold-700">Wholesale page</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold-400">
            We're Here to Help
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Have questions about our products, shipping, or wholesale opportunities? 
            Don't hesitate to reach out - we're here to help!
          </p>
          <div className="text-xl font-serif font-bold text-gold-400">
            Crafted in Dubai. Loved in Canada.
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact