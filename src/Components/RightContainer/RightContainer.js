import React from 'react'
import WeatherCardAccumulator from './../WeatherCardAccumulator/WeatherCardAccumulator'
import './RightContainer.css'
import JumbotronAccumulator from './../JumbotronAccumulator/JumbotronAccumulator'
const RightContainer = ({todayWeather})=>{
    return (
    <div>
        {/* weather card container that contains all of the cards displayed  */}
        <WeatherCardAccumulator todayWeather = {todayWeather} />
        
        
        <p className='text-style'>Todays Highlights</p>
        <div className='jumbotron-margin '>
             {/* first two jumbotrons displaying wind speed and humidity */}
               
              <JumbotronAccumulator number={1} windspeed={todayWeather[0].wind_speed} humidity={todayWeather[0].humidity}/>
            
            {/* second two jumbotrons displaying visibility and airpressure*/}
            
            <JumbotronAccumulator visibility = {todayWeather[0].visibility}  airpressure={todayWeather[0].air_pressure} />
            
        </div>
    </div>
    )
}


export default RightContainer