import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    temparature: 19,
    description: "Clear Sky",
    humidity: 50,
    windSpeed: 10,
    currentHour: 12,
    currentMinute: 53,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
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
        <div className="col-4 city-name">Berlin</div>
        <div className="col-4 current-temperature">
          {weatherData.temparature}
          <span className="celsius">°C</span>
        </div>
        <div className="col-4 sky-data current-weather-data">
          {weatherData.description}
        </div>
        <div className="col-4 current-weather-data">
          {weatherData.currentHour}:{weatherData.currentMinute}
          <div className="col-12 current-weather-data">12 August 2022</div>
        </div>
        <div className="col-4">
          <img
            src={weatherData.imgUrl}
            alt="sun"
            className="weather-icon main"
          />
        </div>
        <div className="col-4 current-weather-data">
          Humidity: {weatherData.humidity}%
          <div className="col-12 current-weather-data">
            Wind speed: {weatherData.windSpeed}km/h
          </div>
        </div>
      </div>
    </div>
  );
}
