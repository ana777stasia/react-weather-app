import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "f26f7a1bde9f9ef7818f1bda2d4d548a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row weekly-weather">
      <div className="col-2 weekly-weather-data">
        Wednseday
        <div className="col">23°|18°</div>
        <div className="col">
          <WeatherIcon code="01d" size={36} />
        </div>
      </div>
    </div>
  );
}
