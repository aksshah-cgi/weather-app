import axios from 'axios';
import React, {useState,useEffect} from 'react'
import './SearchBox.css'

interface SearchDataProp{
  onSearch: (arg:{data:object,city:string}) => void
}


export const SearchBox:React.FC<SearchDataProp> = ({onSearch}) => {

  const [queriedCity,setQueriedCity] = useState<string>('Berlin');

  const getWeatherData = () => { 
    const key = '83c8682ee873400e849152615220806';
    const forecast_weather_url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${queriedCity}&days=5&alerts=yes`;
    // const current_weather_url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${queriedCity}&aqi=no`;

    axios.get(forecast_weather_url).then(
      (response) => {
        console.log(response.data)
        onSearch({
          data: response.data,
          city: queriedCity
        });
      }
    )
    // const getCurrentWeatherData = axios.get(current_weather_url);

    // axios.all([getForecastWeatherData,getCurrentWeatherData]).then(
    //   axios.spread((...combinedWeatherData) => {
    //     const forecastWeatherData = combinedWeatherData[0];
    //     const currentWeatherData = combinedWeatherData[1].data;
        
    //     onSearch({
    //       data: forecastWeatherData,
    //       city: queriedCity
    //     })
    //   })
    // )
  }

  useEffect(()=>{
    getWeatherData();
  }, [queriedCity])

  return (
    <div className="input_wrapper">
       <input
            autoFocus
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={e=>setQueriedCity(e.target.value)}
            value={queriedCity}/>  
    </div>
  )
}