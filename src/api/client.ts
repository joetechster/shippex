import axios from 'axios';

const client = axios.create({
  baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
  withCredentials: true, // Ensures cookies (session) are preserved
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
