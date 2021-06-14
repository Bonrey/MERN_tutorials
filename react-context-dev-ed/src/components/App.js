import React from 'react';
import '../App.scss';
import Nav from './Nav';
import CarList from './CarList';
import { CarProvider } from '../contexts/CarContext';
import AddCar from './AddCar';

const App = () => {
  return (
    <CarProvider>
      <div className="App">
        <Nav />
        <AddCar />
        <CarList />
      </div>
    </CarProvider>
  );
}

export default App;
