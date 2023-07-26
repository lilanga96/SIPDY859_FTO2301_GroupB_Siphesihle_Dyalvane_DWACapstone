import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchAllShows = () => {
  return axios.get(`${API_BASE_URL}/shows`)
    .then((response) => {
      // Map through the shows and add genre labels based on the provided genre IDs
      const showsWithGenres = response.data.map((show) => {
        const genreLabels = show.genres.map((genreId) => {
          switch (genreId) {
            case 1:
              return 'Personal Growth';
            case 2:
              return 'True Crime and Investigative Journalism';
            case 3:
              return 'History';
            case 4:
              return 'Comedy';
            case 5:
              return 'Entertainment';
            case 6:
              return 'Business';
            case 7:
              return 'Fiction';
            case 8:
              return 'News';
            case 9:
              return 'Kids and Family';
            default:
              return 'Unknown Genre';
          }
        });
        return { ...show, genreLabels };
      });

      return showsWithGenres;
    })
    .catch((error) => {
      console.error('Error fetching shows:', error);
      return [];
    });
};


export const fetchShowById = (id) => {
  return axios.get(`${API_BASE_URL}/id/${id}`);
};

