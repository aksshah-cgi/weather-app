import { useState } from 'react';
import { CardsWrapper } from './components/CardsWrapper/';
import { SearchBox } from './components/SearchBox/';
import { Logo } from './components/Logo';
import './App.css';
import { UnitChanger } from './components/UnitChanger';

function App() {
  const [weatherData, setWeatherData] = useState<any>({});
  const [degreeUnit, setDegreeUnit] = useState<string>('');

  const updateWeatherData = (data: any) => {
    setWeatherData(data);
  }

  const updateDegreeUnit = (unit: string) => {
    setDegreeUnit(unit);
  }

  return (
    <div className="app">
      <header>
        <Logo />
        <SearchBox onSearch={updateWeatherData} />
        <UnitChanger onUnitChange={updateDegreeUnit} />
      </header>
      <main>
        <CardsWrapper weatherData={weatherData} degreeUnit={degreeUnit} />
      </main>
    </div>
  );
}

export default App;
