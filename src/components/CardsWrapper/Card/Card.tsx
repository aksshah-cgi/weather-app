import React from 'react'
import './Card.css'

interface Props {
  date: string;
  temp: string;
  condition: string;
  icon: string;
  sunrise?: string;
  sunset?: string;
  maxTemperatureCelcius?: number;
  minTemperatureCelcius?: number;
  humidity?: number;
}

export const Card: React.FC<Props> = ({
  temp,
  date,
  condition,
  icon,
  sunrise,
  sunset,
  humidity,
  maxTemperatureCelcius,
  minTemperatureCelcius
}) => {
  return (
    <div className="card">
      <h4 className="date_time">{date}</h4>
      <p className="condition">{condition}</p>
      <img className="image" src={icon} alt={condition} />
      <h3 className="temp">Average temperature<br /><span>{temp}° C</span></h3>
      <div className="additional_data_container">
        <div className="additional_data">
          <p>
            <span className="title">Min. Temp</span>
            <span className="value">{minTemperatureCelcius}° C</span>
          </p>
          <p>
            <span className="title">Max. Temp</span>
            <span className="value">{maxTemperatureCelcius}° C</span>
          </p>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">Sunrise</span>
            <span className="value">{sunrise}</span>
          </p>
          <p>
            <span className="title">Sunset</span>
            <span className="value">{sunset}</span>
          </p>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">Humidity</span>
            <span className="value">{humidity} %</span>
          </p>
        </div>
      </div>
    </div>
  )
}