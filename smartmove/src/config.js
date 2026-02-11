// API configuration based on environment
// For local development, requests are proxied to localhost:5001 via Vite config
// For production, requests go directly to the deployed backend
const isProduction = import.meta.env.PROD;

const API_BASE_URL = isProduction 
  ? "https://smartmove-backend-nmzy.onrender.com/api" 
  : "/api";

export { API_BASE_URL };
