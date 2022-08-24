import React, { useContext } from "react";

export const initialVal = "celsius";

export const WeatherContext = React.createContext(initialVal);

export const useWeatherContext = () => useContext(WeatherContext);
