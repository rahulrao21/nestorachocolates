// Environment configuration utility
export const env = {
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  
  // API Configuration
  API_URL: import.meta.env.VITE_API_URL || 'https://api.nestorainc.com',
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'info@nestorainc.com',
  
  // Application Settings
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Nestora Inc.',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Premium Sugar-Free Dubai Chocolates',
  
  // Feature Flags
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_COOKIES: import.meta.env.VITE_ENABLE_COOKIES !== 'false',
  ENABLE_CONTACT_FORM: import.meta.env.VITE_ENABLE_CONTACT_FORM !== 'false',
  
  // Computed values
  get isDevelopment() {
    return this.NODE_ENV === 'development'
  },
  
  get isProduction() {
    return this.NODE_ENV === 'production'
  },
  
  get isTest() {
    return this.NODE_ENV === 'test'
  }
}

// Validate required environment variables
export const validateEnv = () => {
  const requiredVars = [
    'VITE_CONTACT_EMAIL',
    'VITE_APP_NAME'
  ]
  
  const missingVars = requiredVars.filter(varName => !import.meta.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars)
  }
  
  return missingVars.length === 0
}

export default env