import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import "./Weather.css";

export default function Weather(props) {
  let weatherInfo = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "e18f610bb5a857482b560fc01e23f479";
    const units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="d-flex" role="search" id="search-form">
          <input
            className="form-control me-2 rounded-pill search-field"
            type="search"
            placeholder="Enter your city..."
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary rounded-pill search-button"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="row weather-data">
          <div className="col-12 current-weather-data">Current weather</div>
          <div className="col-4 city-name">{props.defaultCity}</div>
          <div className="col-4 current-temperature">
            {Math.round(weatherData.temperature)}
            <span className="celsius">°C</span>
          </div>
          <div className="col-4 sky-data current-weather-data">
            {weatherData.description}
          </div>
          <div className="col-4 current-weather-data">
            <Time date={weatherData.date} />
          </div>
          <div className="col-4">
            <img
              src={weatherInfo.imgUrl}
              alt="sun"
              className="weather-icon main"
            />
          </div>
          <div className="col-4 current-weather-data">
            Humidity: {weatherData.humidity}%
            <div className="col-12 current-weather-data">
              Wind speed: {Math.round(weatherData.wind)}km/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
