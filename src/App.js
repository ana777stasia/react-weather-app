import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Forecast />
      <span class="footer">
        <a
          href="https://github.com/ana777stasia/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Anastasiia Vahina
      </span>
    </div>
  );
}

export default App;
