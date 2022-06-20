import './CurrentWeather.css'
import { WeatherDataDTO } from '../../Interfaces/WeatherDataDTO/WeatherDataDTO';


interface Props {
  degreeUnit: string;
  weatherData: {
    data: WeatherDataDTO
    city: string;
  };
}


export const CurrentWeather: React.FC<Props> = ({ weatherData, degreeUnit }) => {
  if (!weatherData.data) {
    return (
      <p className="error">Sorry! Data currently not available.</p>
    );
  }

  if (weatherData.data.error) {
    return (<p className="error">Oops! {weatherData.data.error.message}</p>)
  }

  return (
    <>
      <div className='location_details_container'>
        <h2>{weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}</h2>
        <div className='location_details_extra'>
          <p className="region"><span className="title">Region:</span> {weatherData.data.location.region} </p>
          <p className="timezone"><span className="title">Timezone:</span> {weatherData.data.location.tz_id}</p>
        </div>
      </div>

      <section>
        <p><b>Date-Time:</b> <br />{weatherData.data.location.localtime}</p>
        <div className="essential_data">
          <div className="image_wrapper">
            <p>{weatherData.data.current.condition.text}</p>
            <img width='110' src={weatherData.data.current.condition.icon} alt={weatherData.data.current.condition.text} />
          </div>
          <h4 className='current_weather_temperature'>
            {degreeUnit && degreeUnit == 'F' ? weatherData.data.current.temp_f : weatherData.data.current.temp_c}&deg; <span>{!degreeUnit ? 'C' : degreeUnit}</span></h4>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">Feels Like</span>
            <span className="value">{degreeUnit && degreeUnit == 'F' ? weatherData.data.current.feelslike_f : weatherData.data.current.feelslike_c}&deg; {!degreeUnit ? 'C' : degreeUnit}</span>
          </p>
          <p>
            <span className="title">Humidity</span>
            <span className="value">{weatherData.data.current.humidity}%</span>
          </p>
          <p>
            <span className="title">Visibility</span>
            <span className="value">{weatherData.data.current.vis_km} km</span>
          </p>
          <p>
            <span className="title">Wind Speed</span>
            <span className="value">{weatherData.data.current.wind_kph} km/h</span>
          </p>
          <p>
            <span className="title">Wind Direction</span>
            <span className="value">{weatherData.data.current.wind_dir}</span>
          </p>
        </div>
      </section>
    </>
  );
}