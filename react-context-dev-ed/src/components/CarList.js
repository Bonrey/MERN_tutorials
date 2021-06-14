import React, { useContext } from 'react';
import Car from './Car';
import { CarContext } from '../contexts/CarContext';

const CarList = () => {
  const [cars] = useContext(CarContext);

  return (
    <main>
      <h1>Fastest cars in the world:</h1>
      <ul>
        {cars.map(car => <Car name={car.name} topSpeed={car.topSpeed} key={car.id} />)}
      </ul>
    </main>
  );
}

export default CarList;
