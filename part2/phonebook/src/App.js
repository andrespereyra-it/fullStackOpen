import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchedNames, setSearchedNames] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [matchedName, setMatchedName] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const { data } = response;
      setPersons(data);
    });
  }, []);

  const filterSearch = (input) => {
    const searchResult = persons.filter((person) => {
      return person.name === input;
    });
    if (searchResult.length !== 0) {
      setSearchedNames(searchResult);
      setMatchedName(true);
    }
  };

  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    filterSearch(inputSearch);
    setNewSearch(inputSearch);
    if (inputSearch === "") {
      setMatchedName(false);
    }
  };

  const handleName = (e) => {
    const inputLetters = e.target.value;
    setNewName(inputLetters);
  };

  const handleNumber = (e) => {
    const inputNumber = e.target.value;
    setNewNumber(inputNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(inputData));
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} newSearch={newSearch} />
      <h2>add a new</h2>
      <PersonForm
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        matchedName={matchedName}
        searchedNames={searchedNames}
        persons={persons}
      />
    </div>
  );
};

export default App;
