import React from 'react'
import {Button } from 'react-bootstrap'
import './SearchBar.css'

const SearchBar = ({inputchange , searchbuttonclick}) =>{
    return(
   <div className='searchbar-flex searchbar-margin'>
       <input type="text" placeholder="search Location" className='col-sm-9 col-xs-12' onChange={inputchange}/>
       <Button variant="primary" className="col-sm-3 col-xs-6" onClick={searchbuttonclick}>Search</Button>
   </div>
    )
}

export default SearchBar