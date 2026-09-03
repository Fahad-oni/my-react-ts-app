import { useState } from 'react';
import type { CountriesType } from './../../type';
import './Country.css';

export interface CountryProps {
  country: CountriesType;
  handleVisitedCountry: (country: CountriesType) => void;
}

export default function Country({
  country,
  handleVisitedCountry,
}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited ? 'country-visited' : ''}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>{country.name.common}</h2>
      <p className="capital">Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <button onClick={handleVisited}>
        {visited ? 'Visited' : 'Mark as visited'}
      </button>
    </div>
  );
}
