import React from 'react';
import PropTypes from 'prop-types';
import PetItem from '../PetItem/PetItem';
import css from './GalleryPets.module.css';

const GalleryPets = ({ pets }) => {
  return (
    <div className={css.container}>
      {pets.length > 0 &&
        pets.map(pet => (
          <PetItem key={pet.id} id={pet.id} name={pet.name} image={pet.image} />
        ))}
    </div>
  );
};
GalleryPets.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default GalleryPets;
