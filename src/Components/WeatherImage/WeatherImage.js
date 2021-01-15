import React from 'react'
import './WeatherImage.css'


const WeatherImage = ({width,height,imgtobedisplayed}) =>{
     const removespaces = imgtobedisplayed.replace(/\s/g, '') //removing spaces from the weather_State to get the image 
     return (
        <img className='card-img' src= {process.env.PUBLIC_URL + `${removespaces}.png`}  style={{width:width , height:height}}alt='fig' />
     )
   
   
}

export default WeatherImage;