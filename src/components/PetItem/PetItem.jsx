import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PetItem.module.css';

const PetItem = ({ id, name, image, match }) => {
  const { path } = match;
  return (
    <NavLink to={`${path}/${id}`} style={{ textDecoration: 'none' }}>
      <div className={css.item}>
        <img src={image} alt="" />
        <p className={css.text}>{name}</p>
      </div>
    </NavLink>
  );
};
PetItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};
export default withRouter(PetItem);
