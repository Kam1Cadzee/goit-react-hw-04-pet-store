import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PetItem.module.css';

const PetItem = ({ id, name, image, match }) => {
  const { path } = match;
  return (
    <div className={css.item}>
      <img src={image} alt="" />
      <NavLink to={`${path}/${id}`} className={css.text}>
        {name}
      </NavLink>
    </div>
  );
};
PetItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};
export default withRouter(PetItem);
