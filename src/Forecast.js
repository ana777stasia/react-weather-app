import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row weekly-weather">
      <div className="col-2 weekly-weather-data">
        Wednseday
        <div className="col">23°|18°</div>
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="cloudy"
            className="weekly-weather-icon"
          />
        </div>
      </div>
      <div className="col-2 weekly-weather-data">
        Thursday
        <div className="col">27°|23°</div>
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="thunderstorm"
            className="weekly-weather-icon"
          />
        </div>
      </div>
      <div className="col-2 weekly-weather-data">
        Friday
        <div className="col">30°|24°</div>
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="sun"
            className="weekly-weather-icon"
          />
        </div>
      </div>
      <div className="col-2 weekly-weather-data">
        Saturday
        <div className="col">35°|26°</div>
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="hot"
            className="weekly-weather-icon"
          />
        </div>
      </div>
      <div className="col-2 weekly-weather-data">
        Sunday
        <div className="col">29°|20°</div>
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
            alt="cloudy"
            className="weekly-weather-icon"
          />
        </div>
      </div>
    </div>
  );
}
