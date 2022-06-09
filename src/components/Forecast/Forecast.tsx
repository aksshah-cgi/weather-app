import React, {useState, useEffect} from 'react'
import Card from './Card/Card'
import './Forecast.css'

// interface day{
//   date:string;
//   temp:string;
//   condition:string;
//   icon:string;
// }
// interface weatherData{
//   day_one:day;
//   day_two:day;
//   day_three:day;
// }

const Forecast:React.FC = () => {
  
  const [fetched_data,setFetchedData] = useState<any>({});
  const key = '83c8682ee873400e849152615220806';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=Berlin&days=5`;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      setFetchedData(result.forecast.forecastday)
      console.log(result)
    }).catch(function(e) {
        console.log(e);
    });
  },[]);

  if(fetched_data.length){
    return (
      <div className="forecast_container">
        <h2 className="forecast_place">Berlin, DE</h2>
        <div className="cards_container">
          {fetched_data.map((day:any)=>{
            return <Card key={day.date} date={day.date} temp={day.day.avgtemp_c} condition={day.day.condition.text} icon={day.day.condition.icon}/>
          })}
        </div>
      </div>
    )
  }else{
    return (
      <p>Sorry! Data currently unavailable.</p>
    ); 
  }
}
export default Forecast