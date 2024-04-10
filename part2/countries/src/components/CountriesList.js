import { useState, useEffect } from "react";
import { SingleCountry } from "./SingleCountry";

export const CountriesList = ({
  countriesData,
  inputCountry,
  showCountry,
  setShowCountry,
  countryId,
  setCountryId,
}) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filtered = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
    );
    setFilteredCountries(filtered);

    const hasSingleCountry = filtered.length === 1;
    if (hasSingleCountry) {
      setShowCountry(hasSingleCountry);
      setCountryId(filtered[0].cca2);
    }
  }, [inputCountry, countriesData, setShowCountry, setCountryId]);

  const handleShowClick = (id) => {
    setCountryId(id);
    setShowCountry(true);
  };

  if (!countriesData) {
    return null;
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      {filteredCountries.map((country, index) => (
        <ul key={index}>
          <li>{country.name.common}</li>
          <button onClick={() => handleShowClick(country.cca2)}>show</button>
        </ul>
      ))}
      {showCountry && (
        <SingleCountry
          countriesData={countriesData}
          inputCountry={inputCountry}
          showCountry={showCountry}
          countryId={countryId}
        />
      )}
    </div>
  );
};
