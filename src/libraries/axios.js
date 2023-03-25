import axios from 'axios';
import { API_URL } from '../constants/URL';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosClient };