import React from "react";

const WeatherConnect = (city) => {
    const apiKey = "b6a530b72ec64d55906103932231509";
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .catch((error) => {
        throw new Error("there was a problem with the fetch operation", error)
    });
};
 
export default WeatherConnect;