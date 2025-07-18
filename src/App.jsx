import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Wholesale from './pages/Wholesale'
import NotFound from './pages/NotFound'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <CookieBanner />
      </div>
    </ErrorBoundary>
  )
}

export default App