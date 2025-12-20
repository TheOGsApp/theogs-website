import Cookies from 'js-cookie';
import axios from 'axios';

import { appConfig } from '@/config';
import { storageKeys } from '@/constants';

const API_BASE = appConfig.apiUrl;

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000, // 10 seconds
  timeoutErrorMessage: 'timeout_error',
});

// Add token to every request if exists
api.interceptors.request.use((config) => {
  const token = Cookies.get(storageKeys.accessToken);

  console.log('API Request Token:', token);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
