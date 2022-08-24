import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WeatherContext } from "./WeatherContext";
import { convertToFahrenheit } from "./utils";

export default function WeatherForecastDay(props) {
  const [unit] = React.useContext(WeatherContext);

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
      {day()}
      {unit === "celsius" ? (
        <div className="col">
          {Math.round(props.data.temp.max)}°|
          {Math.round(props.data.temp.min)}°
        </div>
      ) : (
        <div className="col">
          {Math.round(convertToFahrenheit(props.data.temp.max))}°|
          {Math.round(convertToFahrenheit(props.data.temp.min))}°
        </div>
      )}
      <div className="col">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
    </div>
  );
}
