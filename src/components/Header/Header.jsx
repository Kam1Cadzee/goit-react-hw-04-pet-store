import React from 'react';
import Nav from '../Nav/Nav';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Nav />
    </header>
  );
};
export default Header;
