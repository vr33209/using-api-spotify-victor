import axios from 'axios'

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/',
});

export default api;