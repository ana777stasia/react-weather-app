import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weekly-weather">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "f26f7a1bde9f9ef7818f1bda2d4d548a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
