import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Wholesale = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    orderQuantity: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your wholesale inquiry! Our team will contact you within 24 hours.')
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: '',
      orderQuantity: '',
      message: ''
    })
  }

  return (
    <>
      <Helmet>
        <title>Wholesale Program - Nestora Inc. | B2B Premium Chocolate Distribution</title>
        <meta name="description" content="Join Nestora Inc.'s wholesale program for retailers. Premium sugar-free Dubai chocolates with competitive pricing for businesses." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-4">
              Wholesale Program
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with Nestora Inc. and bring premium sugar-free Dubai chocolates to your customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-dark-green-800 mb-6">
                Why Partner with Nestora?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-2">Premium Quality Products</h3>
                    <p className="text-gray-700">Authentic sugar-free chocolates crafted in Dubai with premium ingredients and traditional techniques.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-700">Attractive wholesale margins and volume discounts to maximize your profitability.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">📈</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-2">Growing Market</h3>
                    <p className="text-gray-700">Tap into the expanding sugar-free and premium chocolate market with unique products.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-lg">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-2">Dedicated Support</h3>
                    <p className="text-gray-700">Our team provides marketing materials, product training, and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-green-50 to-dark-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-6">
                Who We Work With
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Specialty Food Stores</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Health Food Retailers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gourmet Chocolate Boutiques</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gift Shops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Hotels & Restaurants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Corporate Gifting Companies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Online Retailers</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-dark-green-800 mb-3">
                  Minimum Order Requirements
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><strong>Initial Order:</strong> $500 minimum</p>
                  <p className="text-gray-700"><strong>Reorder:</strong> $300 minimum</p>
                  <p className="text-gray-700"><strong>Payment Terms:</strong> Net 30 days</p>
                  <p className="text-gray-700"><strong>Shipping:</strong> Free on orders over $1,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-dark-green-800 mb-4">
                Our Wholesale Products
              </h2>
              <p className="text-gray-700 mb-8">
                Premium sugar-free pistachio kunafa dark chocolate available in multiple sizes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🍫</div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">80g Bars</h3>
                  <p className="text-gray-600 text-sm mb-3">Perfect for individual sales</p>
                  <p className="text-gold-600 font-bold">Wholesale pricing available</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🍫</div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">100g Bars</h3>
                  <p className="text-gray-600 text-sm mb-3">Popular gift size</p>
                  <p className="text-gold-600 font-bold">Bulk discounts available</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🍫</div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">200g Bars</h3>
                  <p className="text-gray-600 text-sm mb-3">Premium sharing size</p>
                  <p className="text-gold-600 font-bold">Best margins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-6">
                Submit Your Wholesale Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="business@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    >
                      <option value="">Select business type</option>
                      <option value="specialty-food">Specialty Food Store</option>
                      <option value="health-food">Health Food Retailer</option>
                      <option value="chocolate-boutique">Chocolate Boutique</option>
                      <option value="gift-shop">Gift Shop</option>
                      <option value="hotel-restaurant">Hotel/Restaurant</option>
                      <option value="corporate-gifting">Corporate Gifting</option>
                      <option value="online-retailer">Online Retailer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Order Quantity *
                    </label>
                    <select
                      id="orderQuantity"
                      name="orderQuantity"
                      value={formData.orderQuantity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    >
                      <option value="">Select quantity range</option>
                      <option value="$500-$1000">$500 - $1,000</option>
                      <option value="$1000-$2500">$1,000 - $2,500</option>
                      <option value="$2500-$5000">$2,500 - $5,000</option>
                      <option value="$5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-vertical"
                    placeholder="Tell us about your business, location, target customers, or any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit Wholesale Inquiry
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-dark-green-50 to-dark-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold text-dark-green-800 mb-6">
                Next Steps
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Submit Your Inquiry</h3>
                    <p className="text-gray-700 text-sm">Complete the form with your business details and requirements.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Initial Review</h3>
                    <p className="text-gray-700 text-sm">Our team will review your application within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Discussion & Approval</h3>
                    <p className="text-gray-700 text-sm">We'll schedule a call to discuss pricing, terms, and requirements.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Partnership Agreement</h3>
                    <p className="text-gray-700 text-sm">Sign the wholesale agreement and place your first order.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="text-lg font-semibold text-dark-green-800 mb-3">
                  Contact Our B2B Team
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">📧 Email: info@nestorainc.com</p>
                  <p className="text-gray-700">⏰ Response Time: Within 24 hours</p>
                  <p className="text-gray-700">🌐 Website: nestorainc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold-400">
            Join Our Wholesale Network
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Partner with Nestora Inc. and offer your customers the finest sugar-free chocolates from Dubai.
          </p>
          <div className="text-xl font-serif font-bold text-gold-400">
            Luxury Chocolates. Guilt-Free. Profitable.
          </div>
        </div>
      </section>
    </>
  )
}

export default Wholesale