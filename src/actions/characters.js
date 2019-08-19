import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const NEXT_PAGE = 'NEXT_PAGE';

export const getCharacters = () => ({
  type: GET_CHARACTERS,
  payload: axios
    .get('https://swapi.co/api/people/')
    .then(response => ({ data: response.data }))
    .catch(error => Promise.reject(error))
});

export const nextPage = (page) => ({
  type: NEXT_PAGE,
  payload: axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => ({ data: response.data }))
    .catch(error => Promise.reject(error))
});
