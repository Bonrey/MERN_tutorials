import React, { useState, useEffect } from 'react';

const fetchItems = async () => {
  const data = await fetch('https://restcountries.eu/rest/v2/all');
  return (await data.json()).slice(35, 45);
}

const Shop = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await fetchItems();
      setCountries(items);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries page</h1>
      {countries.map(country => (
        <h2 style={{margin: "1rem 0"}} key={country.name}>{country.name}</h2>
      ))}
    </div>
  );
}
export default Shop;
