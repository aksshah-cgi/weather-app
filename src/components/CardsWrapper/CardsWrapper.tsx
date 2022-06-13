import React, {useState} from 'react'
import Card from './Card/Card'
import './CardsWrapper.css'


interface day{
  date:string;
  astro:{
    sunrise:string;
    sunset:string;
  }
  day:{
    avgtemp_c:number;
    condition:{
      text:string;
      icon:string;
    };
    mintemp_c:number;
    maxtemp_c:number;
    avghumidity:number;
  }
}

interface Props{
  weatherData:{
    data:{
      error:{
        message:string;
      }
      forecast:{
        forecastday:{
          one:day;
          two:day;
          three:day;
        }
      }
      location:{
        name:string;
        country:string;
      }
    };
    city:string;
  };
}

const CardsWrapper:React.FC<Props> = ({weatherData}) => {
 
  if(weatherData.data !== undefined){
    if(weatherData.data.error){
      return <p className="error">{weatherData.data.error.message}</p>
    }else{
      return (
        <section>
          <h3>
              {weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}
          </h3>
          <div className="cards_container">
            {weatherData.data.forecast && weatherData.data.location &&
            Object.values(weatherData.data.forecast.forecastday).map((day:any)=>{
              return <Card 
                key={day.date} 
                date={day.date} 
                temp={day.day.avgtemp_c} 
                condition={day.day.condition.text} 
                icon={day.day.condition.icon}
                min_temp={day.day.maxtemp_c}
                max_temp={day.day.mintemp_c}
                humidity={day.day.avghumidity}
                sunrise={day.astro.sunrise}
                sunset={day.astro.sunset}
              />
            })}
          </div>
        </section>
      )
    }
  }else{
    return (
      <p className="error">Sorry! Data currently not available.</p>
    ); 
  }
}
export default CardsWrapper;