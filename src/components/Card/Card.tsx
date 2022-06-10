import React from 'react'
import './Card.css'

interface Props{
  date?:string;
  temp?:string;
  condition?:string;
  icon?:string;
}

const Card:React.FC<Props> = ({
  temp,
  date,
  condition,
  icon
}) => {
  return (
    <div className="card">
      <h4 className="date_time">{date}</h4>
      <img className="image" src={icon}/>
      <h3 className="temp">average temperature<br/><span>{temp} C</span></h3>
      <p className="condition">{condition}</p>
    </div>
  )
}

export default Card