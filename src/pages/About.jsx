import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nestora Inc. - Our Story | Premium Sugar-Free Dubai Chocolates</title>
        <meta name="description" content="Learn about Nestora Inc.'s journey from Dubai to Canada, bringing premium sugar-free chocolates to luxury chocolate lovers." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafted in Dubai. Loved in Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-dark-green-800 mb-6">
                From Dubai to Canada
              </h2>
              <p className="text-gray-700 mb-6">
                Nestora Inc. was born from a passion for exceptional chocolate and a desire to bring the finest 
                sugar-free confections from Dubai to Canadian chocolate enthusiasts. Our journey began when we 
                discovered the incredible craftsmanship and unique flavors that Dubai's chocolate artisans 
                could create.
              </p>
              <p className="text-gray-700 mb-6">
                We recognized that there was a gap in the Canadian market for truly premium, sugar-free chocolates 
                that didn't compromise on taste or quality. That's when we decided to bridge the gap between 
                Dubai's exceptional chocolate heritage and Canada's discerning chocolate lovers.
              </p>
              <p className="text-gray-700">
                Every bar of Nestora chocolate tells a story of tradition, innovation, and the pursuit of 
                perfection. We're proud to bring you these exceptional treats that prove luxury and 
                health-consciousness can coexist beautifully.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏜️</div>
                <h3 className="text-2xl font-serif font-bold text-dark-green-800 mb-2">Dubai Heritage</h3>
                <p className="text-gray-700">Where our chocolates are crafted with centuries of tradition</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-dark-green-50 to-dark-green-100 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-dark-green-800 mb-4">
                Our Mission
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-green-800 mb-2">Quality Excellence</h3>
                <p className="text-gray-700">
                  We import only the finest sugar-free chocolates, ensuring every bite meets our 
                  exacting standards for taste and quality.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍃</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-green-800 mb-2">Guilt-Free Luxury</h3>
                <p className="text-gray-700">
                  We believe that indulgence shouldn't come with compromise. Our sugar-free chocolates 
                  deliver luxury without the guilt.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇨🇦</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-green-800 mb-2">Canadian Excellence</h3>
                <p className="text-gray-700">
                  We're proud to serve Canadian chocolate lovers with exceptional products and 
                  outstanding customer service.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🍫</div>
                <h3 className="text-2xl font-serif font-bold text-dark-green-800 mb-2">Premium Ingredients</h3>
                <p className="text-gray-700">Only the finest pistachios, kunafa, and dark chocolate</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-dark-green-800 mb-6">
                What Makes Us Special
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Authentic Dubai Craftsmanship</h3>
                    <p className="text-gray-700">Each chocolate is crafted by skilled artisans in Dubai using traditional methods.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Sugar-Free Innovation</h3>
                    <p className="text-gray-700">Advanced sugar-free technology that doesn't compromise on taste.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Unique Flavors</h3>
                    <p className="text-gray-700">Exclusive pistachio kunafa combination you won't find anywhere else.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-400 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-800 mb-1">Fresh Imports</h3>
                    <p className="text-gray-700">Regular fresh shipments ensure you always get the best quality.</p>
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
            Join the Nestora Family
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of luxury and health consciousness with our premium sugar-free chocolates.
          </p>
          <div className="text-2xl font-serif font-bold text-gold-400 mb-2">
            Luxury Chocolates. Guilt-Free.
          </div>
        </div>
      </section>
    </>
  )
}

export default About