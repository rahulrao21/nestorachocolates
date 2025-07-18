import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Nestora Inc.</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our premium sugar-free Dubai chocolates." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-16 bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl font-serif font-bold text-gold-400 mb-4">
              404
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="space-y-4">
              <Link 
                to="/" 
                className="inline-block btn-primary mr-4"
              >
                Go Back Home
              </Link>
              
              <Link 
                to="/products" 
                className="inline-block btn-outline"
              >
                Shop Our Chocolates
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-4">
                Popular Pages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  to="/products" 
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-dark-green-800 mb-2">Products</h3>
                  <p className="text-sm text-gray-600">Browse our premium sugar-free chocolates</p>
                </Link>
                
                <Link 
                  to="/about" 
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-dark-green-800 mb-2">About Us</h3>
                  <p className="text-sm text-gray-600">Learn about our story and mission</p>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-dark-green-800 mb-2">Contact</h3>
                  <p className="text-sm text-gray-600">Get in touch with our team</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound