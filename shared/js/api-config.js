// API Configuration for PeaceOut
// This file provides a flexible way to configure API endpoints for different environments

(function(global) {
  'use strict';

  // Determine the appropriate API base URL based on the environment
  function getApiBase() {
    // Check for environment variable override (useful for different deployments)
    if (typeof BACKEND_URL !== 'undefined' && BACKEND_URL) {
      return BACKEND_URL.endsWith('/') ? BACKEND_URL + 'api/' : BACKEND_URL + '/api/';
    }
    
    // Check if we're running locally
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:4000/api/';
    }
    
    // Check if we're running in development with a custom port
    if (window.location.port && window.location.port !== '80' && window.location.port !== '443') {
      return `${window.location.protocol}//${window.location.hostname}:4000/api/`;
    }
    
    // Auto-detect common deployment platforms
    const hostname = window.location.hostname;
    
    // Vercel deployment
    if (hostname.includes('vercel.app')) {
      return `${window.location.protocol}//${hostname}/api/`;
    }
    
    // Netlify deployment
    if (hostname.includes('netlify.app') || hostname.includes('netlify.com')) {
      return `${window.location.protocol}//${hostname}/api/`;
    }
    
    // Railway deployment
    if (hostname.includes('railway.app')) {
      return `${window.location.protocol}//${hostname}/api/`;
    }
    
    // Heroku deployment
    if (hostname.includes('herokuapp.com')) {
      return `${window.location.protocol}//${hostname}/api/`;
    }
    
    // GitHub Pages with custom backend URL (configurable)
    if (hostname.includes('github.io')) {
      // You can set this in a deployment-specific config file
      return window.PEACEOUT_BACKEND_URL || 'https://your-backend-deployment.vercel.app/api/';
    }
    
    // Fallback to same-origin for custom domains
    return `${window.location.protocol}//${hostname}/api/`;
  }

  // Configuration object
  const ApiConfig = {
    BASE_URL: getApiBase(),
    
    // Helper method to build full endpoint URLs
    endpoint(path) {
      return this.BASE_URL + path.replace(/^\//, '');
    },
    
    // Common fetch options for authenticated requests
    getAuthOptions(options = {}) {
      return {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      };
    },
    
    // Helper method for GET requests
    async get(path, options = {}) {
      const response = await fetch(this.endpoint(path), this.getAuthOptions(options));
      return response;
    },
    
    // Helper method for POST requests
    async post(path, data = null, options = {}) {
      const requestOptions = this.getAuthOptions({
        method: 'POST',
        ...options
      });
      
      if (data && !options.body) {
        requestOptions.body = JSON.stringify(data);
      }
      
      const response = await fetch(this.endpoint(path), requestOptions);
      return response;
    },
    
    // Helper method for DELETE requests
    async delete(path, options = {}) {
      const response = await fetch(this.endpoint(path), this.getAuthOptions({
        method: 'DELETE',
        ...options
      }));
      return response;
    }
  };

  // Make it available globally
  global.ApiConfig = ApiConfig;
  
  // Also make it available as a module if needed
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ApiConfig;
  }

})(typeof window !== 'undefined' ? window : this);