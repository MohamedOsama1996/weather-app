import SideBar from './Components/SideBar/SideBar'
import SearchBar from './Components/SearchBar/SearchBar'
import {useState} from 'react'
import axios from 'axios'
import RightContainer from './Components/RightContainer/RightContainer'
import'./App.css'
function App() {
  const [search,setsearch] = useState(true)
  const [todayWeather,settodayWeather] = useState(null)
  const [location,setlocation] = useState("")
  const [city,setcity] = useState('')

  const inputchangeHandler = (event) =>{
     console.log(event.target.value);
     setcity(event.target.value)
  }
   const searchbuttonHandler = async() =>{
    const getcityid = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=${city}`)
    const getcityweather = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${getcityid.data[0].woeid}`)
    settodayWeather(getcityweather.data.consolidated_weather)
    setlocation(city)
    setsearch(false);

    
  }
  
 
  return (
      
   <div className='display-flex'>
     
      { !search ?
      <div className='col-xs-18 col-sm-12 col-md-3 sidebar-background' style={{ height:'100vh'}}>
            <SideBar todayWeather={todayWeather} location={location}  searchbutton ={() => setsearch(true)}/>
      </div> :<div className='col-xs-18 col-sm-12 col-md-3 ' style={{ height:'100vh',backgroundColor:'#1E213A'}}>
            <SearchBar inputchange= {(event) => inputchangeHandler(event)} searchbuttonclick = { ()=> searchbuttonHandler() }/>
      </div>}
         {/* rightContainer */}
      
        <div className='col-xs-18 col-sm-12 col-md-9 w-100' style={{backgroundColor: '#100E1D'}}>
               {todayWeather!=null ?<RightContainer todayWeather={todayWeather}/>  :
               <div className='paragraph-flex'> 
                 <p className='paragraph-props'>Enter The Location In The Input Field</p> 
                 </div>}
               </div>
      
      
   </div>
      
 
       

  
  
  );
}

export default App;
