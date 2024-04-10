import { useEffect, useState } from "react";
import axios from "axios";

export const WeatherDataProvider = ({ children, filteredCountry }) => {
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    filteredCountry &&
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?lat=${filteredCountry.latlng[0]}&lon=${filteredCountry.latlng[1]}&key=${apiKey}&include=minutely`
        )
        .then((response) => setWeatherData(response.data.data));
  }, [filteredCountry]);

  return children(weatherData);
};
