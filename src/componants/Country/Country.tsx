
import type { CountriesType } from './../../type';
import './Country.css'

export interface CountryProps {
  country: CountriesType
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>{country.name.common}</h2>
      <p className='capital'>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <button>Visited</button>
    </div>
  );
}