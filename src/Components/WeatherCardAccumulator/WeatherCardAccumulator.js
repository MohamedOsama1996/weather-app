import React from 'react'
import WeatherCard from './../WeatherCard/WeatherCard'
import './WeatherCardAccumulator.css'
const WeatherCardAccumulator = ({todayWeather})=>{
  // each weather card displays the weather of the day passed to it as a prop in todayWeather 
   if(todayWeather!=null){
    return (
        <div className='weathercard-flex'>
                <WeatherCard className='weathercard-width' todayWeather={todayWeather[1]} /> 
                <WeatherCard className='weathercard-width' todayWeather={todayWeather[2]} />
                <WeatherCard className='weathercard-width' todayWeather={todayWeather[3]}/>
                <WeatherCard className='weathercard-width' todayWeather={todayWeather[4]} />
                <WeatherCard className='weathercard-width' todayWeather={todayWeather[5]}/>

        </div>
    )
   }
   else{
     return (
       <div className="text-center">
           <p>wait for ay haga</p>
       </div>
     )
   }
}

export default WeatherCardAccumulator