import { use, useState } from 'react';
import type { CountriesType } from '../../type';
import Country from '../Country/Country';
import './Countries.css';

export interface CountriesProps {
  countriesPromise: Promise<CountriesType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<CountriesType[]>([]);

  const handleVisitedCountry = (country: CountriesType): void => {
    const exist = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);

    if (exist) {
      const remainingCountries = visitedCountries.filter(
        c => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountries(remainingCountries);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };
  const countries = use(countriesPromise);
  return (
    <div>
      <h4 className="heading">Visited Countries: {visitedCountries.length}</h4>
      <div className="visited-countries">
        <ul>
          {visitedCountries.map(country => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries">
        {countries.map(country => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
}
