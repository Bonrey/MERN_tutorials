import React, { useState, createContext } from 'react';

export const CarContext = createContext();

export const CarProvider = props => {
  const [cars, setCars] = useState([
    {
      name: 'Bugatti Chiron',
      topSpeed: 304,
      id: 0
    },
    {
      name: 'Hennessey Venom F5',
      topSpeed: 301,
      id: 1
    },
    {
      name: 'SSC Tuatara',
      topSpeed: 316,
      id: 2
    },
  ]);

  return (
    <CarContext.Provider value={[cars, setCars]}>
      {props.children}
    </CarContext.Provider>
  );
}