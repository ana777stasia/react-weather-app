import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weekly-weather">
        {forecast.map((forecastData, index) => {
          if (index < 5) {
            return (
              <div className="col-2 weekly-weather-data" key={index}>
                <WeatherForecastDay data={forecastData} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "dd4dcf596d1ea22725f01aa4058b3d4f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
