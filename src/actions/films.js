import axios from 'axios';

export const GET_FILMS = 'GET_FILMS';
export const SEARCH_FILM = 'SEARCH_FILM';

export const getFilms = () => ({
  type: GET_FILMS,
  payload: axios
    .get('https://swapi.co/api/films/')
    .then(response => ({ data: response.data }))
    .catch(error => Promise.reject(error))
});

export const searchFilm = (query) => ({
  type: SEARCH_FILM,
  payload: axios
    .get(`https://swapi.co/api/films/?search=`)
    .then(response => ({ data: response.data }))
    .catch(error => Promise.reject(error))
});
