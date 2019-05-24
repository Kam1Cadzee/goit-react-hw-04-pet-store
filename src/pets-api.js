import * as axios from 'axios';
import db from './server/db.json';

export const getPets = () => {
  const url =
    'https://pixabay.com/api/?key=12509636-53caf59f5bb94c5e817c60f6e&image_type=photo&orientation=horizontal&q=dogs&per_page=9';
  return axios(url).then(data => {
    return data.data.hits.map((item, i) => {
      db.pets[i].image = item.webformatURL;
      return db.pets[i];
    });
  });
};
export const getPet = id => {
  return Promise.resolve(db.pets.find(pet => pet.id === id));
};
