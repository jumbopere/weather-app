import axios from 'axios'
import React, {useState}  from 'react'
import styled from 'styled-components'
import CityComponent from './Components/CityComponent'
import WeatherComponent from "./Components/WeatherComponent"


export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
  };

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
width: 380px;
background: white;
font-family: Monstserrat;
`
const Title = styled.div`
color: black;
font-size:18px;
font-weight: bold;

`

const API_KEY = 'a4e77950b324ba8005b717f7b5ab3d64'

const App = () => {
    const [city, updateCity] = useState()
    const [weather, updateWeather] = useState()
  
    const fetchWeather = async(e) => {
        e.preventDefault()
     const response =
     await   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
 updateWeather(response.data)
    }
    return (
        <Container>
 <Title>Jumbo Weather App</Title>
 {
     weather ? (
         <WeatherComponent weather = { weather} city = {city}/>
     ):(
        <CityComponent updateCity = {updateCity} fetchWeather= {fetchWeather}/>

     )
 }
 
        </Container>
    )
}

export default App
