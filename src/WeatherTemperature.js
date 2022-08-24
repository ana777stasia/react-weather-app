import React from "react";
import { WeatherContext } from "./WeatherContext";
import { convertToFahrenheit } from "./utils";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = React.useContext(WeatherContext);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-4 current-temperature">
        {Math.round(props.celsius)}
        <span className="celsius">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="col-4 current-temperature">
        {Math.round(convertToFahrenheit(props.celsius))}
        <span className="celsius">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
