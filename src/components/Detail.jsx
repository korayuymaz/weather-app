import { useState, useEffect } from 'react'
import axios from "axios"
import { useCity } from '../context/CityContext'
import  { cities } from "../assets/cities"
import "../styles/Detail.css"



function Detail() {
  const [weather, setWeather] = useState([])
  const { city } = useCity()

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city].latitude}&lon=${cities[city].longitude}&appid=d0857153d6d39079d02cd872b1f84968`)
    .then((res) => setWeather(res.data.daily))
    .catch((e) => console.log(e))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${cities[city].latitude}&lon=${cities[city].longitude}&appid=d0857153d6d39079d02cd872b1f84968`)
    .then((res) => setWeather(res.data.daily))
    .catch((e) => console.log(e))
  }, [city, setWeather])

  return(
    <div className='flex'>
      {weather.map((data, index) => {
        return(<div className="box">
          <img className='Image' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
          <div class="Condition">{data.weather[0].main}</div>
          <div class="Max">{data.temp.max}</div> 
          <div class="Min">{data.temp.min}</div>
        </div>)
      })}
    </div>
  )
}

export default Detail