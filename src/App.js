import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import { WeatherContext, initialVal } from "./WeatherContext";

function App() {
  const [unit, setUnit] = useState(initialVal);

  return (
    <WeatherContext.Provider value={[unit, setUnit]}>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Berlin" />
        </div>
        <span className="footer">
          <a
            href="https://github.com/ana777stasia/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Anastasiia Vahina
        </span>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
