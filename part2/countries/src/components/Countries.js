import { CountriesDataProvider } from "../provider/CountriesDataProvider";
import { CountriesList } from "./CountriesList";
import { SingleCountry } from "./SingleCountry";

export const Countries = ({
  inputCountry,
  showCountry,
  setShowCountry,
  countryId,
  setCountryId,
}) => {
  return (
    <CountriesDataProvider>
      {(countriesData) => (
        <>
          {showCountry ? (
            <SingleCountry
              countriesData={countriesData}
              inputCountry={inputCountry}
              showCountry={showCountry}
              countryId={countryId}
            />
          ) : (
            <CountriesList
              countriesData={countriesData}
              inputCountry={inputCountry}
              showCountry={showCountry}
              setShowCountry={setShowCountry}
              countryId={countryId}
              setCountryId={setCountryId}
            />
          )}
        </>
      )}
    </CountriesDataProvider>
  );
};
