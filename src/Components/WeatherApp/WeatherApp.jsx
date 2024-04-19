import React, { useState } from 'react'
import './WeatherApp.css'
import DataContainer from '../Components/DataComponent';
import SearchComponent from '../Components/SearchComponent';
import cloud_icon from "../Assets/cloud.png";

function WeatherApp() {

    const [wicon,setWicon] = useState(cloud_icon);
    //^ this might change!!!

    return (
        <div className='container'>
            <div>
                <SearchComponent />
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp"></div>
            <div className="weather-location"></div>
            <div>
                <DataContainer />
            </div>
        </div>
    );
}

export default WeatherApp