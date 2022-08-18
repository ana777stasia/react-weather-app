import React from "react";
import Time from "./Time";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-data">
        <div className="col-12 current-weather-data">Current weather</div>
        <div className="col-4 city-name">{props.data.city}</div>
        <div className="col-4 current-temperature">
          {Math.round(props.data.temperature)}
          <span className="celsius">°C</span>
        </div>
        <div className="col-4 sky-data current-weather-data">
          {props.data.description}
        </div>
        <div className="col-4 current-weather-data">
          <Time date={props.data.date} />
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-4 current-weather-data">
          Humidity: {props.data.humidity}%
          <div className="col-12 current-weather-data">
            Wind speed: {Math.round(props.data.wind)}km/h
          </div>
        </div>
      </div>
    </div>
  );
}
