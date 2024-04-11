import { useEffect, useState } from "react";
import axios from "axios";

export const WeatherDataProvider = ({ children, filteredCountry }) => {
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const weatherAddress = `https://api.weatherbit.io/v2.0/current?lat=${filteredCountry.latlng[0]}&lon=${filteredCountry.latlng[1]}&key=${apiKey}&include=minutely`;

  useEffect(() => {
    filteredCountry &&
      axios
        .get(weatherAddress)
        .then((response) => setWeatherData(response.data.data));
  }, [filteredCountry]);

  return children(weatherData);
};
