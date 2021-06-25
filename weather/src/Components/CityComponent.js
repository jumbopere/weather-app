import React from 'react'
import styled from 'styled-components'
const WeatherLogo = styled.img`
width: 140px ;
height: 140px;
margin: 40px auto
`
const CityLabel = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`
const Search = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color: black;
font-weight: bold;
margin: 20px auto;

& input{
    padding: 10px;
    font-size: 14px;
    border:none;
    outline: none;
    font-weight: bold;
}
& button{
    padding: 10px;
    font-size: 14px;
    border:none;
    outline: none;
    background-color: blue;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

`

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props
    return (

        <>
         <WeatherLogo src="/icons/perfect-day.svg"/>   
        <CityLabel>Find the current weather of your city</CityLabel>
       <Search onSubmit = {fetchWeather}>
           <input placeholder= "City"
            onChange={(e)=> updateCity(e.target.value)} />
           <button type = "submit">Search</button>
       </Search>
        </>

    )
}

export default CityComponent
