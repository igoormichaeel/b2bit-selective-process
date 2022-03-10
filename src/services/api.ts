import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { signOut } from '../contexts/AuthContext';

export const api = axios.create({
  baseURL: 'https://frontendproject.b2bit.company/account/',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      toast.error(error.response.data.detail);

      if (error.response.data.code === 'token_expired') {
        signOut();
      }
    }
  }
);
