import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
