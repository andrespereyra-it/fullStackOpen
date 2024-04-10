import { useState } from "react";
import { Finder } from "./components/Finder";
import { Countries } from "./components/Countries";
import "./App.css";

const App = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [showCountry, setShowCountry] = useState(false);
  const [countryId, setCountryId] = useState(null);

  return (
        <div className="App">
          <Finder
            inputCountry={inputCountry}
            setInputCountry={setInputCountry}
            setShowCountry={setShowCountry}
          />
          <Countries 
            inputCountry={inputCountry}
            showCountry={showCountry}
            countryId={countryId}
            setShowCountry={setShowCountry}
            setCountryId={setCountryId}
          />
        </div>
  );
};

export default App;
