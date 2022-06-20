import React, { useState } from 'react'
import { HourlyCard } from '../HourlyCard';
import './DayCard.css'

interface Props {
  date: string;
  temp: string;
  condition: string;
  icon: string;
  sunrise?: string;
  sunset?: string;
  maxTemperature?: number;
  minTemperature?: number;
  humidity?: number;
  degreeUnit: string;
  weatherDataHourly: object;
}

export const DayCard: React.FC<Props> = ({
  temp,
  date,
  condition,
  icon,
  sunrise,
  sunset,
  humidity,
  maxTemperature,
  minTemperature,
  degreeUnit,
  weatherDataHourly
}) => {

  const [showHourlyData, setShowHourlyData] = useState<boolean>(false);

  const toggleHourlyData = () => {
    setShowHourlyData(!showHourlyData);
  }

  return (
    <div className='card' onClick={toggleHourlyData}>
      <h4 className="date_time">Date:  {date}</h4>
      <div className="compact_view">
        <div className="essential_data_container">
          <div>
            <p className="condition">{condition}</p>
            <img className="image" src={icon} alt={condition} />
          </div>
          <h3 className="temp">Average temperature<br /><span>{temp}&deg; {degreeUnit}</span></h3>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">Min. Temp</span>
            <span className="value">{minTemperature}&deg; {degreeUnit}</span>
          </p>
          <p>
            <span className="title">Max. Temp</span>
            <span className="value">{maxTemperature}&deg; {degreeUnit}</span>
          </p>
          <p>
            <span className="title">Sunrise</span>
            <span className="value">{sunrise}</span>
          </p>
          <p>
            <span className="title">Sunset</span>
            <span className="value">{sunset}</span>
          </p>
          <p>
            <span className="title">Humidity</span>
            <span className="value">{humidity} %</span>
          </p>
        </div>
      </div>
      <button type="button" onClick={toggleHourlyData}>{showHourlyData ? 'Hide' : 'Show'} hourly details</button>
      {showHourlyData &&
        <div className="detailed_view">
          <HourlyCard hourlyForecast={weatherDataHourly} degreeUnit={degreeUnit} />
        </div>
      }
    </div>
  )
}