import React from 'react';
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

function DataContainer() {
    return (
        <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent"></div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate"></div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
    )
}

export default DataContainer