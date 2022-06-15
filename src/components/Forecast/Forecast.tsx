import { Fragment } from 'react';
import { Card } from '../Card'
import './Forecast.css'


interface ForecastDay {
  date: string;
  astro: {
    sunrise: string;
    sunset: string;
  }
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
    mintemp_f: number;
    maxtemp_f: number;
    avghumidity: number;
  }
}

interface Props {
  degreeUnit: string;
  weatherData: {
    data: {
      current: {
        condition: {
          icon: string;
          text: string;
        },
        temp_c: string;
        temp_f: string;
        feelslike_c: number;
        feelslike_f: number;
        humidity: number;
        vis_km: number;
        wind_kph: number;
        wind_dir: string;
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
        tz_id: string;
      }
    };
    city: string;
  };
}


export const Forecast: React.FC<Props> = ({ weatherData, degreeUnit }) => {
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

      <div className="location_details_container">
        <h2>{weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}</h2>
        <div className='location_details_extra'>
          <p className="region"><span className="title">Region:</span> {weatherData.data.location.region} </p>
          <p className="timezone"><span className="title">Timezone:</span> {weatherData.data.location.tz_id}</p>
        </div>
      </div>

      <section>
        <h3 className="section_headline">3-Day Forecast</h3>
        <div className="cards_container">
          {weatherData.data.forecast && weatherData.data.location &&
            Object.values(weatherData.data.forecast.forecastday).map((day: any) => {
              return <Card
                key={day.date}
                date={day.date}
                temp={degreeUnit && degreeUnit == 'F' ? day.day.avgtemp_f : day.day.avgtemp_c}
                condition={day.day.condition.text}
                icon={day.day.condition.icon}
                maxTemperature={degreeUnit && degreeUnit == 'F' ? day.day.maxtemp_f : day.day.maxtemp_c}
                minTemperature={degreeUnit && degreeUnit == 'F' ? day.day.mintemp_f : day.day.mintemp_c}
                humidity={day.day.avghumidity}
                sunrise={day.astro.sunrise}
                sunset={day.astro.sunset}
                degreeUnit={!degreeUnit? 'C' : degreeUnit}
              />
            })}
        </div>
      </section>

    </Fragment>
  );
}