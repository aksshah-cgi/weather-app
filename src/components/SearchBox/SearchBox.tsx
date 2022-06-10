import React, {useState,useEffect} from 'react'
import './SearchBox.css'

interface SearchDataProp{
  onSearch: (arg:{data:object,city:string}) => void
}

const SearchBox:React.FC<SearchDataProp> = ({onSearch}) => {

  const [fetched_data,setFetchedData] = useState<any>({});
  const [queriedCity,setqueriedCity] = useState<string>('');
  const key = '83c8682ee873400e849152615220806';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${queriedCity}&days=5`;

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(result => {
      setFetchedData(result);
      onSearch({
        data:fetched_data,
        city:queriedCity,
      })
    }).catch(function(e) {

    });
  },[queriedCity])

  return (
    <div className="input_wrapper">
       <input
            autoFocus
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={e=>setqueriedCity(e.target.value)}
            value={queriedCity}/>  
    </div>
  )
}

export default SearchBox