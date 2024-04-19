import React from 'react'
import './WeatherApp.css'
import DataContainer from '../Components/DataComponent';
import SearchComponent from '../Components/SearchComponent';
import WeatherComponent from '../Components/WeatherComponent';

function WeatherApp() {
    return (
        <div className='container'>
            <SearchComponent />
            <WeatherComponent />
            <DataContainer />
        </div>
    );
}

export default WeatherApp