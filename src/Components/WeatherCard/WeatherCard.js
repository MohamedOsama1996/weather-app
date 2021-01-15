import React from 'react'
import Card from 'react-bootstrap/Card'
import './WeatherCard.css'
import WeatherImage from './../WeatherImage/WeatherImage'
//a card displaying the weather based on the props passed to it 
const WeatherCard = ({todayWeather}) =>{
    return(
       <Card className='weathercard-color weather-card' >
         <Card.Header>{todayWeather.applicable_date}</Card.Header>
         <WeatherImage  width={56} height={62} imgtobedisplayed={todayWeather.weather_state_name}/>
    
         <div className='text-flex'>
         <Card.Text >{Math.round(todayWeather.max_temp)}C</Card.Text>
           <Card.Text>{Math.round(todayWeather.min_temp)}C</Card.Text>
         </div>
           
      </Card>  
     
    )
}

export default WeatherCard