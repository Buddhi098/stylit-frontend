// axiosInstance.js
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8081';

const WebApi = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

WebApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default WebApi;