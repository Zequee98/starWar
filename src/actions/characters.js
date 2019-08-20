import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';

const getAllCharacters = (url, peoples, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedPeoples = peoples.concat(response.data.results)
      if (response.data.next !== null) getAllCharacters(response.data.next, retrivedPeoples, resolve, reject)
      else resolve(retrivedPeoples)
    })
    .catch(error => Promise.reject(error))
}

export const getCharacters = () => ({
  type: GET_CHARACTERS,
  payload: new Promise((resolve, reject) => {
    getAllCharacters('https://swapi.co/api/people/', [], resolve, reject)
  })
    .then(response => ({ data: { results: response, count: response.length } }))
    .catch(error => Promise.reject(error))
});


