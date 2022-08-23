import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div>
      <div className="col-2 weekly-weather-data">
        {day()}
        <div className="col">
          {Math.round(props.data.temp.max)}°|
          {Math.round(props.data.temp.min)}°
        </div>
        <div className="col">
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
        </div>
      </div>
    </div>
  );
}
