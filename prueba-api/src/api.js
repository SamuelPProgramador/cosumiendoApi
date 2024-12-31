import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.takeit.ciph3r.co',
});

export default api;
