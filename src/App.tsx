import { useState } from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox/';
import { CurrentWeather } from './components/CurrentWeather';
import { Logo } from './components/Logo';
import { UnitChanger } from './components/UnitChanger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Forecast } from './components/Forecast';
import { Navigation } from './components/Navigation/';
import { ThemeChanger } from './components/ThemeChanger';

function App() {
  const [weatherData, setWeatherData] = useState<any>({});
  const [degreeUnit, setDegreeUnit] = useState<string>('');
  const [themeMode, setThemeMode] = useState<string>('');

  const updateWeatherData = (data: any) => {
    setWeatherData(data);
  }

  const updateDegreeUnit = (unit: string) => {
    setDegreeUnit(unit);
  }

  const updateThemeMode = (mode: string) => {
    setThemeMode(mode);
  }

  return (
    <Router>
      <div className="app">
        <header>
          <Logo/>
          <SearchBox onSearch={updateWeatherData} />
          <ThemeChanger  onModeChange={updateThemeMode} />
          <UnitChanger onUnitChange={updateDegreeUnit} />
        </header>
        <main>
          <Navigation mode={themeMode} />
          <Routes>
            <Route path="/" element={<CurrentWeather weatherData={weatherData} degreeUnit={degreeUnit} />} />
            <Route path="/forecast" element={<Forecast weatherData={weatherData} degreeUnit={degreeUnit} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
