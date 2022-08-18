import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <Forecast />
      </div>
      <span class="footer">
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
  );
}

export default App;
