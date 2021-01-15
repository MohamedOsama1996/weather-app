import React from 'react'
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherImage from './../WeatherImage/WeatherImage'
import Button from 'react-bootstrap/Button'
import Date from './../Date/Date'
import Location from './../Location/Location'
const SideBar = ({todayWeather,location,searchbutton}) =>{
    
      if(todayWeather!=null){
        //   displaying the weather of today 
        return(
     <div className='text-center sidebar-font'>
                   <div className='display-flex margin-div'>
                   <Button variant='secondary' className='sidebar-button' onClick={searchbutton}>Search for a location</Button>
                   </div>
                   <div className='margin-div'>
                       <WeatherImage imgtobedisplayed = {todayWeather[0].weather_state_name} width={202} height={234}/>
                   </div>
                   <div className='margin-div'>
                       <span>{Math.round(todayWeather[0].the_temp)}C</span>
                   </div>
                   <div className='margin-div'>
                       <span>{todayWeather[0].weather_state_name}</span>
                   </div>
                   <div className='margin-div'>
                       <Date date={todayWeather[0].applicable_date} />
                   </div>
                
                   <div className='margin-div'>
                          <Location location={location} />
                    </div>
                </div>
        )
      }
      else{
      return (
          <p>nothing</p>
      )
      }
        
        
    
   
  
  
}


export default SideBar