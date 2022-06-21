import { useState } from 'react';
import './App.css';
import {
  Logo,
  SearchBox,
  Navigation,
  ThemeChanger,
  UnitChanger,
  LanguageChanger
} from './components/Header'
import { Current } from './components/Main/Current';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Forecast } from './components/Main/Forecast';

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
          <Logo />
          <SearchBox onSearch={updateWeatherData} />
          <ThemeChanger onModeChange={updateThemeMode} />
          <UnitChanger onUnitChange={updateDegreeUnit} />
          <LanguageChanger/>
        </header>
        <main>
          <Navigation mode={themeMode} />
          <Routes>
            <Route path="/" element={<Current weatherData={weatherData} degreeUnit={degreeUnit} />} />
            <Route path="/forecast" element={<Forecast weatherData={weatherData} degreeUnit={degreeUnit} />} />
          </Routes>
        </main>
        <footer>
          Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
