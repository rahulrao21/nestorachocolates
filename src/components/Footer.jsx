import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">Nestora Inc.</h3>
            <p className="text-gray-300 mb-4">
              Crafted in Dubai. Loved in Canada.
            </p>
            <p className="text-gray-300 mb-4">
              Premium sugar-free chocolates imported from Dubai, delivering luxury and guilt-free indulgence across Canada.
            </p>
            <p className="text-gold-400 font-semibold">
              Luxury Chocolates. Guilt-Free.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-gold-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link to="/wholesale" className="text-gray-300 hover:text-gold-400 transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@nestorainc.com</p>
              <p>Domain: nestorainc.com</p>
              <p>Serving Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-green-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Nestora Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer