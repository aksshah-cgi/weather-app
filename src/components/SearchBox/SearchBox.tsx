import React, { useState, useEffect } from 'react'
import { WeatherDTO } from '../../interfaces/WeatherDTO';
import './SearchBox.css'

interface SearchDataProp {
  onSearch: (arg: { data: object, city: string }) => void
}

const SearchBox: React.FC<SearchDataProp> = ({ onSearch }) => {
  const [weatherData, setWeatherData] = useState<WeatherDTO | undefined>(undefined);
  const [queriedCity, setQueriedCity] = useState<string>('');
  const key = '83c8682ee873400e849152615220806';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${queriedCity}&days=5`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setWeatherData(result);
        onSearch({
          data: result,
          city: queriedCity,
        });
      });
  }, [queriedCity]);

  // useEffect(() => {
  //   if (!weatherData) return;
  //   onSearch({
  //     data:weatherData,
  //     city:queriedCity,
  //   });
  // }, [weatherData]);

  return (
    <div className="input_wrapper">
      <input
        autoFocus
        type="text"
        className="search-bar"
        placeholder="Enter city name"
        onChange={e => setQueriedCity(e.target.value)}
        value={queriedCity} />
    </div>
  )
}

export default SearchBox