import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.nav}>
      <NavLink exact to="/" className={css.item} activeClassName={css.active}>
        Home
      </NavLink>
      <NavLink to="/pets" className={css.item} activeClassName={css.active}>
        Pets
      </NavLink>
      <NavLink to="/about" className={css.item} activeClassName={css.active}>
        About
      </NavLink>
    </nav>
  );
};
export default Nav;
