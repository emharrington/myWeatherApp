import React, {useState} from 'react';
import {iconMap} from '../Assets/IconMap';
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";

function SearchComponent() {
    let api_key = "af5ab7e27b93af99ad971d7fd7f8f7f6";

    const [wicon,setWicon] = useState(cloud_icon);
    console.log(wicon)

    const search = async () => {
        const element =document.getElementsByClassName("cityInput")

        if(element[0].value==="") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url)
        let data = await response.json();

        const humidity =document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location =document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °c";
        location[0].innerHTML = data.name;

        const weatherIcon = data.weather[0].icon;
        const selectedIcon = iconMap[weatherIcon] || clear_icon;
        setWicon(selectedIcon);
    }    

    return (
        <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
    )
}

export default SearchComponent;