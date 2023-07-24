import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchAllShows = () => {
  return axios.get(`${API_BASE_URL}/shows`);
};

export const fetchShowById = (showId) => {
  return axios.get(`${API_BASE_URL}/shows/${showId}`);
};

