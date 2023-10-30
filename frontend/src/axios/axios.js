import axios from 'axios';
import { API_URL } from '../Utils/Constants/constant';

const apiClient = axios.create({
  baseURL: API_URL,
});

export default apiClient;
