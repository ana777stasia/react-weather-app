import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
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
