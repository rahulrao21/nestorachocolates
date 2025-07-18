import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      text: "Finally, a chocolate that doesn't make me feel guilty! The pistachio kunafa flavor is absolutely divine.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Vancouver, BC",
      text: "These chocolates are a game-changer. Premium quality from Dubai, and I love that they're sugar-free.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      location: "Montreal, QC",
      text: "The quality is exceptional. You can taste the luxury in every bite. Will definitely order again!",
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Nestora Inc. - Premium Sugar-Free Dubai Chocolates | Home</title>
        <meta name="description" content="Discover premium sugar-free chocolates from Dubai, now available across Canada. Luxury chocolates. Guilt-free indulgence." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-dark-green-800 to-dark-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-gold-400">Nestora</span> Inc.
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gold-200">
              Crafted in Dubai. Loved in Canada.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Premium sugar-free chocolates imported from Dubai, delivering luxury and guilt-free indulgence across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-green-800 mb-4">
              Our Featured Product
            </h2>
            <p className="text-lg text-gray-600">
              Luxury Chocolates. Guilt-Free.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-green-800 mb-4">
                  Sugar-Free Pistachio Kunafa Dark Chocolate
                </h3>
                <p className="text-gray-700 mb-6">
                  Experience the perfect fusion of Middle Eastern flavors with premium dark chocolate. 
                  Our signature pistachio kunafa chocolate is crafted with the finest ingredients in Dubai 
                  and delivered fresh to your doorstep across Canada.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-dark-green-100 text-dark-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    80g
                  </span>
                  <span className="bg-dark-green-100 text-dark-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    100g
                  </span>
                  <span className="bg-dark-green-100 text-dark-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    200g
                  </span>
                </div>
                <Link to="/products" className="btn-primary">
                  View Products
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🍫</div>
                    <p className="text-dark-green-800 font-semibold">Premium Chocolate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-green-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by chocolate lovers across Canada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-dark-green-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold-400">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Canada who choose Nestora for their premium chocolate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Shop Our Products
            </Link>
            <Link to="/wholesale" className="btn-outline">
              Wholesale Inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home