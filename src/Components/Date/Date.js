import React from 'react'



const Date = ({date})=>{
        const datewithoutyear = date.substring(5);
        return(
            <div className='display-flex justify-content-center'>
                   <span>Today</span>&nbsp;
                   <span>.</span>&nbsp;
                   <span>{datewithoutyear}</span>
              </div>
        )
}


export default Date