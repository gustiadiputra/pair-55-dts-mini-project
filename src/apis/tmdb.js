import axios from 'axios';

const API_KEY = '01e3741f93244a45e88c3597f2456e9d';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
