
import  styled from "styled-components"
import { WeatherIcons } from "../App"

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg"
}

const WeatherCondition = styled.div`
display: flex;
flex-direction:row;
align-items: center;
width: 100%;
margin: 30px auto;
justify-content: space-between;
`
const Condition = styled.span`
margin:20px auto;
font-size: 14px;
& span {
font-size: 28px
}
`
const WeatherLogo = styled.img`
width: 100px ;
height: 100px;
margin: 5px auto
`
const Location = styled.span `
font-size: 20px;
font-weight: bold;
`
const WeatherLabel = styled.span`
font-size: 14px;
text-transform: capitalize;
font-weight: bold;
margin: 20px 25px 10px;
text-align: start;
width:90%;

`
const WeatherContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfo = (props)=> {
    const {name, value} = props
    return (
        <InfoContainer>
            <InfoIcon  src = {WeatherInfoIcons[name]} />
            <InfoLabel>
                { value }
<span> { name } </span>
            </InfoLabel>
        </InfoContainer>
    )
}
const WeatherComponent = (props) => {
    const {weather} =props
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
 <WeatherCondition>
     <Condition> 
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}</Condition>
                    <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
     </WeatherCondition>           
     <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
     <WeatherLabel> Weather Info</WeatherLabel>
<WeatherContainer>
<WeatherInfo name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
<WeatherInfo name ="humidity" value={weather?.main?.humidity}/>
<WeatherInfo name ="wind" value={weather?.wind?.speed}/>
<WeatherInfo name ="pressure" value={weather?.main?.pressure}/>

</WeatherContainer>
        </>
    )
}

export default WeatherComponent
