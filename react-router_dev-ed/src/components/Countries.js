import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const resp = await fetch('https://restcountries.eu/rest/v2/all');
      const allCountries = await resp.json();
      setCountries(allCountries.slice(30, 45));
    }
    fetchAll();
  }, []);

  return (
    <main>
      <h1>Countries page</h1>
      {countries.map(country => (
        <h2 style={{ margin: "1rem 0" }} key={country.name}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/countries/${country.alpha3Code}`}>{country.name}</Link>
        </h2>
      ))}
    </main>
  );
}
export default Countries;
