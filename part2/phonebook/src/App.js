import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";
import "./App.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchedNames, setSearchedNames] = useState([]);
  const [matchedName, setMatchedName] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((response) => {
      const { data } = response;
      setPersons(data);
    });
  }, [setPersons]);

  return (
    <div className="App" style={{ padding: "10px" }}>
      <h2>Phonebook</h2>
      <Notification
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <Filter
        persons={persons}
        setSearchedNames={setSearchedNames}
        setMatchedName={setMatchedName}
      />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
      />
      <h2>Numbers</h2>
      <Persons
        matchedName={matchedName}
        searchedNames={searchedNames}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
