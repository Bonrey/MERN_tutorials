import React, { useState, useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const AddCar = () => {
  const [,setCars] = useContext(CarContext);
  const [name, setName] = useState('');
  const [topSpeed, setTopSpeed] = useState('');

  const updateName = e => setName(e.target.value);
  const updateTopSpeed = e => setTopSpeed(e.target.value);

  const addCar = e => {
    e.preventDefault();
    setCars(prevCars => ([...prevCars, {
      name, topSpeed, id: prevCars[prevCars.length - 1].id + 1
    }]));
  };

  return (
    <form onSubmit={addCar}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="topSpeed" value={topSpeed} onChange={updateTopSpeed} />
      <button>Submit</button>
    </form>
  );
}

export default AddCar;
