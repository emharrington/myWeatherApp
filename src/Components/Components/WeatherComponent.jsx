import React, {useState} from 'react';
import cloud_icon from "../Assets/cloud.png";

function WeatherComponent() {
    const [wicon,setWicon] = useState(cloud_icon);

    return (
        <div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp"></div>
            <div className="weather-location"></div>
        </div>
    )
}

export default WeatherComponent;