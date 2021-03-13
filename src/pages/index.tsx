import { HomeContainer } from '@styles/home'
import axios from 'axios'
import { FormEvent, useCallback, useState } from 'react'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const APP_ID_KEY = publicRuntimeConfig.APP_OPENWEATHER_API_KEY

export default function Home() {

  const [cityName, setCityName] = useState('')

  const [celsius, setCelsius] = useState<number | undefined>(undefined)
  const [fahrenheit, setFahrenheit] = useState<number | undefined>(undefined)
  const [returnedCity, setReturnedCity] = useState<string | undefined>(undefined)
  const [returnedCountry, setReturnedCountry] = useState<string | undefined>(undefined)

  const searchWeather = useCallback((e: FormEvent) => {
    e.preventDefault()

    async function exec() {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID_KEY}`)
        if (response) {
          setCelsius(response.data.main.temp)
          setFahrenheit((response.data.main.temp * 9/5) + 32)
          setReturnedCity(response.data.name)
          setReturnedCountry(response.data.sys.country)
        } else {
          console.log = console.warn = console.error = () => {};
          alert('Oops, this city name is invalid... try again! ;)')
        }
      } catch (err) {
        console.log = console.warn = console.error = () => {};
        alert('Oops, this city name is invalid... try again! ;)')
      }
    }
    exec()
  }, [cityName])

  return (
    <HomeContainer>
      <div id="logoContainer">
        <h1>What's the weather?</h1>
      </div>

      <form onSubmit={searchWeather}>
        <label htmlFor="cityInput">Search City</label>
        <div className="inputContainer">
          <input 
            type="text" 
            name="cityName" 
            id="cityInput" 
            placeholder="New York..." 
            value={cityName} 
            onChange={e => setCityName(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      
      <div id="results">
        {celsius && (
          <div className="celsius">
            <span>{returnedCity}, {returnedCountry}</span>
            <h2>{celsius}°C</h2>
          </div>
        )}
        {fahrenheit && (
          <div className="fahrenheit">
            <span>{returnedCity}, {returnedCountry}</span>
            <h2>{fahrenheit}°F</h2>
          </div>
        )}
      </div>
    </HomeContainer>
  )
}