import { defineStore } from 'pinia';
import api from '../api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(credentials) {
      const response = await api.post('/auth/login', credentials);
      this.user = response.data;
    },
    async register(userInfo) {
      const response = await api.post('/auth/register', userInfo);
      this.user = response.data;
    },
  },
});
