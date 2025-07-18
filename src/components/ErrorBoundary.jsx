import React from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl font-serif font-bold text-gold-400 mb-4">
              Oops!
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green-800 mb-6">
              Something went wrong
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page or return to our homepage.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="inline-block btn-primary mr-4"
              >
                Refresh Page
              </button>
              
              <Link 
                to="/" 
                className="inline-block btn-outline"
                onClick={() => this.setState({ hasError: false })}
              >
                Go Back Home
              </Link>
            </div>
            
            {import.meta.env.DEV && this.state.error && (
              <div className="mt-8 p-4 bg-red-50 rounded-lg text-left">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Error Details (Development Mode)
                </h3>
                <pre className="text-sm text-red-700 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If this problem persists, please contact us at{' '}
                <a 
                  href="mailto:info@nestorainc.com" 
                  className="text-gold-600 hover:text-gold-700"
                >
                  info@nestorainc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary