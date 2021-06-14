import React, { useState, useEffect } from 'react';

const Country = ({ match }) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchSpecific = async () => {
      const resp = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3Code}`);
      const specific = await resp.json();
      setCountry(specific);
    }
    fetchSpecific();
  }, [match.params.alpha3Code]);

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={country.name} />
    </div>
  );
}
export default Country;
