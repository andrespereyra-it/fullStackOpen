import { useState, useEffect } from "react";
import { WeatherDataProvider } from "../provider/WeatherDataProvider";

export const SingleCountry = ({
  countriesData,
  showCountry,
  countryId,
  inputCountry,
}) => {
  const [filteredCountry, setFilteredCountry] = useState(null);

  useEffect(() => {
    if (countryId) {
      const country = countriesData.find(
        (country) => country.cca2 === countryId
      );
      setFilteredCountry(country);
    }
  }, [countriesData, countryId, inputCountry]);

  if (!showCountry || !filteredCountry || !countryId) {
    return null;
  }

  return (
    <WeatherDataProvider filteredCountry={filteredCountry}>
      {(weatherData) => (
        <div>
          <h1>{filteredCountry.name.common}</h1>
          <p>Capital: {filteredCountry.capital[0]}</p>
          <p>Area: {filteredCountry.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(filteredCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img
            src={filteredCountry.flags.svg}
            alt={filteredCountry.flags.alt}
            className="flag"
          />
          <h2>Wheather in {filteredCountry.capital[0]}</h2>
          {weatherData.length > 0 && (
            <>
              <p>temperature {weatherData[0].temp}</p>
              <img
                alt={weatherData.description}
                src={`https://www.weatherbit.io/static/img/icons/${weatherData[0].weather.icon}.png`}
              />
              <p>wind {weatherData[0].wind_spd.toFixed(2)} m/s</p>
            </>
          )}
        </div>
      )}
    </WeatherDataProvider>
  );
};
