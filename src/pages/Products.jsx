import React from 'react'
import { Helmet } from 'react-helmet-async'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pistachio Kunafa Dark Chocolate",
      weight: "80g",
      price: "$24.99",
      description: "Our signature sugar-free dark chocolate infused with premium pistachios and traditional kunafa. Perfect for a guilt-free treat.",
      features: ["Sugar-Free", "Premium Pistachios", "Dark Chocolate", "Traditional Kunafa"],
      image: "https://via.placeholder.com/300x200/1a3f2b/f59e0b?text=Pistachio+Kunafa+80g"
    },
    {
      id: 2,
      name: "Pistachio Kunafa Dark Chocolate",
      weight: "100g",
      price: "$29.99",
      description: "The perfect size for sharing or savoring. Our premium sugar-free chocolate with the authentic taste of Dubai.",
      features: ["Sugar-Free", "Premium Pistachios", "Dark Chocolate", "Traditional Kunafa"],
      image: "https://via.placeholder.com/300x200/1a3f2b/f59e0b?text=Pistachio+Kunafa+100g"
    },
    {
      id: 3,
      name: "Pistachio Kunafa Dark Chocolate",
      weight: "200g",
      price: "$54.99",
      description: "Our largest size, perfect for chocolate lovers who want to indulge in luxury. Best value for families and gift-giving.",
      features: ["Sugar-Free", "Premium Pistachios", "Dark Chocolate", "Traditional Kunafa"],
      image: "https://via.placeholder.com/300x200/1a3f2b/f59e0b?text=Pistachio+Kunafa+200g"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Premium Sugar-Free Chocolates | Nestora Inc. Products</title>
        <meta name="description" content="Shop our premium sugar-free pistachio kunafa dark chocolates from Dubai. Available in 80g, 100g, and 200g sizes." />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium sugar-free chocolates crafted in Dubai, imported fresh to Canada
            </p>
          </div>

          <div className="mb-12 bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-green-800 mb-4">
                Sugar-Free Pistachio Kunafa Dark Chocolate
              </h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Experience the perfect fusion of Middle Eastern tradition and modern chocolate-making. 
                Our signature chocolate combines the rich, nutty flavor of premium pistachios with 
                the delicate sweetness of traditional kunafa, all wrapped in luxurious dark chocolate 
                that's completely sugar-free.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-dark-green-100 text-dark-green-800 px-4 py-2 rounded-full font-medium">
                  Sugar-Free
                </span>
                <span className="bg-dark-green-100 text-dark-green-800 px-4 py-2 rounded-full font-medium">
                  Imported from Dubai
                </span>
                <span className="bg-dark-green-100 text-dark-green-800 px-4 py-2 rounded-full font-medium">
                  Premium Ingredients
                </span>
                <span className="bg-dark-green-100 text-dark-green-800 px-4 py-2 rounded-full font-medium">
                  Artisan Crafted
                </span>
              </div>
              <p className="text-2xl font-serif font-bold text-gold-600">
                Luxury Chocolates. Guilt-Free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 text-center">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.weight}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-serif font-bold text-dark-green-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-bold text-gold-600 mb-1">{product.weight}</div>
                  <div className="text-3xl font-bold text-dark-green-800">{product.price}</div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-green-800 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="bg-gold-100 text-gold-800 text-sm px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-dark-green-50 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-green-800 mb-4">
                Why Choose Nestora Chocolates?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏜️</span>
                  </div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">Dubai Crafted</h3>
                  <p className="text-gray-700 text-sm">Authentic Middle Eastern flavors and traditional techniques</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">Sugar-Free</h3>
                  <p className="text-gray-700 text-sm">Guilt-free indulgence without compromising on taste</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">Premium Quality</h3>
                  <p className="text-gray-700 text-sm">Only the finest ingredients and expert craftsmanship</p>
                </div>
                <div className="text-center">
                  <div className="bg-gold-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-semibold text-dark-green-800 mb-2">Fresh Delivery</h3>
                  <p className="text-gray-700 text-sm">Delivered fresh across Canada with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold-400">
            Ready to Indulge?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience the luxury of Dubai's finest sugar-free chocolates. Order now and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Order Now
            </button>
            <a href="mailto:info@nestorainc.com" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products