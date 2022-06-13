import { useState } from 'react';
import { CardsWrapper } from './components/CardsWrapper/';
import { SearchBox } from './components/SearchBox/';
import { Logo } from './components/Logo';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState<any>({})

  const updateData = (data: any) => {
    setWeatherData(data);
  }

  return (
    <div className="app">
      <header>
        <Logo />
        <SearchBox onSearch={updateData} />
      </header>
      <main>
        <CardsWrapper weatherData={weatherData} />
      </main>
    </div>
  );
}

export default App;
