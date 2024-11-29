// axiosInstance.js
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8081';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 20000, // Timeout after 10 seconds (10000 milliseconds)
});

export default api;
