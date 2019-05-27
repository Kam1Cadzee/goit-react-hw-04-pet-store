import db from './server/db.json';

export const getPets = () => {
  return Promise.resolve(db.pets);
};
export const getPet = id => {
  return Promise.resolve(db.pets.find(pet => pet.id === id));
};
