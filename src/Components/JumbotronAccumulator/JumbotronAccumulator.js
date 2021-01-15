import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './JumbotronAccumulator.css'
const jumbotronAccumulator = ({number,windspeed,humidity,visibility,airpressure})=>{
     //each jumbotron accumulator contains two jumbotrons and based on the number passed from outside the displayed content changes
     // when the number =1 the wind speed and humidity are displayed 
      if(number==1){
        return (
          <div className='jumbotron-flex'>
            
          <Jumbotron className='jumbotron-width jumbotron-color text-center '>
         <h1>Wind Speed</h1>
         <span>
           {Math.round(windspeed)} <span className='unit-span-style'>Mph</span> 
         </span>
       </Jumbotron>
       <Jumbotron className='jumbotron-width jumbotron-color text-center  ' >
         <h1>Humidity</h1>
         <p>
         {Math.round(humidity)} <span className='unit-span-style'>%</span> 
         </p>
       </Jumbotron>
       
      </div>
        )
      }
      else{
        return(
          // when the number not equal 1 the visibility and the air pressure are displayed 
          <div className='jumbotron-flex'>
            
          <Jumbotron className='jumbotron-width jumbotron-color text-center' >
         <h1>Visibility</h1>
         <p>
           {Math.round(visibility)} <span className='unit-span-style'>Miles</span> 
         </p>
       </Jumbotron>
       <Jumbotron className='jumbotron-width jumbotron-color text-center ' >
         <h1>Air Pressure</h1>
         <p>
         {Math.round(airpressure)} <span className='unit-span-style'>Mb</span> 
         </p>
       </Jumbotron>
       
      </div>
        )
      }
       

}


export default jumbotronAccumulator