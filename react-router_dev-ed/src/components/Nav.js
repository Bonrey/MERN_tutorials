import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/countries'>
          <li>Countries</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
