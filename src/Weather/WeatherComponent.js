import React, { useState, useEffect} from "react";
import WeatherConnect from "./WeatherConnect";
import "./Weather.css";

const WeatherComponent = ({city = "Izmir"}) => {
    
    const [weatherData, setWeatherData] = useState(null);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        WeatherConnect(input)
        .then((data) => {
            setWeatherData(data);
            setInput("");
        })
        .catch((error) => {
            console.error("Error fetching weather data", error)
        })
    }

    useEffect(() => {
        WeatherConnect(city)
        .then((data) => {
        setWeatherData(data);
        })
        .catch((error) => {
        console.error("Error fetching weather data", error)
        });
    }, [city]);

    return (
        <div className="weather">
        {weatherData &&
        <div>
            <h2>Weather App</h2>
            <input
            value={input} 
            placeholder="Enter city"
            onChange={handleChange}></input>
            <button
            onClick={handleClick}>Press to fetch</button>
            <p>{weatherData.location.name}, {weatherData.location.country}</p>
            <p>{weatherData.current.temp_c} Degrees</p>
            <p>{weatherData.location.localtime}</p>
        </div> 
        }
        </div>
        );
}
 
export default WeatherComponent;