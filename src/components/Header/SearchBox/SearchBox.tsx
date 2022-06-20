import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './SearchBox.css'

interface SearchDataProp {
  onSearch: (args: {
    data: object,
    city: string
  }) => void;
}

export const SearchBox: React.FC<SearchDataProp> = ({ onSearch }) => {

  const [queriedCity, setQueriedCity] = useState<string>('Berlin');

  const getWeatherData = () => {
    const key = '83c8682ee873400e849152615220806';
    const forecast_weather_url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${queriedCity}&days=5&alerts=yes`;
    axios.get(forecast_weather_url).then(
      (response) => {
        console.log(response.data);
        onSearch({
          data: response.data,
          city: queriedCity
        });
      }
    )
  }

  useEffect(() => {
    getWeatherData();
  }, [queriedCity])

  return (
    <div className='searchbox input_wrapper'>
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