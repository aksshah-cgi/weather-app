import React, {useState} from 'react';
import './App.css';
import CardsWrapper from './components/CardsWrapper/CardsWrapper';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [weatherData,setWeatherData] = useState<any>({})

  const updateData = (data:any) => {
    setWeatherData(data);
  }

  return (
    <div className="app">
      <Header/>
      <SearchBox onSearch={updateData}/>
      <CardsWrapper weatherData={weatherData}/>
    </div>
  );
}

export default App;
