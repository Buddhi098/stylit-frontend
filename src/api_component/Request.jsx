// axiosInstance.js
import axios from 'axios';

const Request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  timeout: 20000, // Timeout after 10 seconds (10000 milliseconds)
});

export default Request;
