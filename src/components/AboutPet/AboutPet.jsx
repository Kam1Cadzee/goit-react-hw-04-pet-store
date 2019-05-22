import React from 'react';
import PropTypes from 'prop-types';
import css from './AboutPet.module.css';

const AboutPet = ({ name, image, age, breed, gender, color, description }) => {
  return (
    <div className={css.item}>
      <h2>All about {name}</h2>
      <div className={css.container}>
        <img src={image} alt="" />
        <div className={css.info}>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Color:</strong> {color}
          </p>
          <p>
            <strong>Breed: </strong>
            {breed}
          </p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};
AboutPet.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default AboutPet;
