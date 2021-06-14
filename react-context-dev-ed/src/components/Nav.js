import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const Nav = () => {
  const [cars] = useContext(CarContext);

  return (
    <nav>
      <p>Logo</p>
      <div className="links">
        <span>Cars ({cars.length})</span>
        <span>About</span>
      </div>
    </nav>
  );
}

export default Nav;
