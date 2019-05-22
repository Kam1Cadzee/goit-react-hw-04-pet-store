import * as axios from 'axios';
import data from './server/db.json';

axios.defaults.baseURL = 'http://localhost:4040';

export const getPets = () => {
  /* return axios.get('/pets').then(response => {
    return response.data;
  }); */
  return Promise.resolve(data.pets);
};
export const getPet = id => {
  /* return axios.get(`/pets/${id}`).then(response => {
    return response.data;
  }); */
  return Promise.resolve(data.pets.find(pet => pet.id === id));
};
