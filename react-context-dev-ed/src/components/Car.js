import React from 'react';

const Car = ({ name, topSpeed }) => {
  return (
    <section className='Car'>
      <h3>{name}</h3>
      <p>Top Speed: {topSpeed}</p>
    </section>
  );
}

export default Car;
