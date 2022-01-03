import React from 'react';

export default function Weather(props) {
    return(
        <div className="weather-container">
            <h1 className="title">Weather App</h1>

            <div className="main-data">
                <h2 className="city">Mexico City</h2>
                <h2 className="temperature">{(props.temp - 273.15).toFixed(2)} °C</h2>
            </div>

            <div className="secondary-data">
                    <h3 className="weather">{props.weather}</h3>
                    <h3 className="wind">Wind Speed: {props.wind} m/s</h3>
                    <h3 className="humidity">Humidity: {props.humidity}%</h3>
            </div>
        </div>
    );
}
