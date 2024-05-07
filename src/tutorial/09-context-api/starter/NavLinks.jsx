import React from 'react';
import UserContainer from './UserContainer';

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-link">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">product</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};

export default NavLinks;
