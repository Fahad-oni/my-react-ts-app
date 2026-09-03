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
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const countries = use(countriesPromise);
  return (
    <div>
      <h4 className='heading'>Visited Countries: {visitedCountries.length}</h4>
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
