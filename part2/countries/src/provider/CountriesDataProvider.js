import axios from "axios";
import { useEffect, useState } from "react";

export const CountriesDataProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((result) => {
        let { data } = result;
        setCountriesData(data);
      });
  }, []);

  return children(countriesData);
};
