import { Fragment } from 'react';
import { Card } from './Card'
import './CardsWrapper.css'


interface ForecastDay {
  date: string;
  astro: {
    sunrise: string;
    sunset: string;
  }
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
    avghumidity: number;
  }
}

interface Props {
  weatherData: {
    data: {
      current: {
        condition: {
          icon: string;
          text: string;
        },
        temp_c: string;
        feelslike_c: number;
      }
      error: {
        message: string;
        code: number;
      }
      forecast: {
        forecastday: {
          one: ForecastDay;
          two: ForecastDay;
          three: ForecastDay;
        }
      }
      location: {
        name: string;
        country: string;
        localtime: string;
        region: string;
      }
    };
    city: string;
  };
}


export const CardsWrapper: React.FC<Props> = ({ weatherData }) => {
  if (!weatherData.data) {
    return (
      <p className="error">Sorry! Data currently not available.</p>
    );
  }

  if (weatherData.data.error) {
    return (<p className="error">Oops! {weatherData.data.error.message}</p>)
  }

  return (
    <Fragment>
      <div className="place_details_container">
        <h2>{weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}</h2>
        <p className="region">Region: {weatherData.data.location.region} </p>
      </div>
      <section>
        <h3 className="section_headline">Current</h3>
        <div className="forecast_container">
          <div className="essential_data">
            <div className="image_wrapper">
              <p>{weatherData.data.current.condition.text}</p>
              <img width='110' src={weatherData.data.current.condition.icon} alt={weatherData.data.current.condition.text} />
            </div>
            <h4 className='current_weather_temperature'>{weatherData.data.current.temp_c}° <span>C</span></h4>
          </div>
          {/* <div className="additional_data">
            <p>
              <span className="title">Feels Like</span>
              <span className="value">{weatherData.data.current.feelslike_c}° C</span>
            </p>
          </div> */}

        </div>
      </section>
      <section>
        <h3 className="section_headline">3-Day Forecast</h3>
        <div className="cards_container">
          {weatherData.data.forecast && weatherData.data.location &&
            Object.values(weatherData.data.forecast.forecastday).map((day: any) => {
              return <Card
                key={day.date}
                date={day.date}
                temp={day.day.avgtemp_c}
                condition={day.day.condition.text}
                icon={day.day.condition.icon}
                maxTemperatureCelcius={day.day.maxtemp_c}
                minTemperatureCelcius={day.day.mintemp_c}
                humidity={day.day.avghumidity}
                sunrise={day.astro.sunrise}
                sunset={day.astro.sunset}
              />
            })}
        </div>
      </section>
    </Fragment>
  );
}