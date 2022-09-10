import React from 'react'
import { useCity } from '../context/CityContext'
import  { cities } from "../assets/cities"

function Dropdown() {
  const { setCity } = useCity()

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <div style={{textAlign:"center", marginTop: "10px"}}>
      <select onChange={handleChange} name="city-names" id="city-names" defaultValue="34">
        {cities.map((item, index) => (
          <option key={index} value={item.id}>{item.name}</option>
        ))}
      </select>
      
    </div>
  )
}

export default Dropdown