import { Suspense } from 'react';
import './App.css';
import Countries from './componants/Countries/Countries';
import type { CountriesType } from './type';

const countiresPromise = async (): Promise<CountriesType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h1>World on the go.....</h1>
      {
        <Suspense fallback={<div className="suspanse">Nadir on the goo..</div>}>
          <Countries countriesPromise={countiresPromise()}></Countries>
        </Suspense>
      }
    </>
  );
}

export default App;
