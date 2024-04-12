import { useState } from "react";

const Filter = ({ persons, setSearchedNames, setMatchedName }) => {
  const [newSearch, setNewSearch] = useState("");

  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    filterSearch(inputSearch);
    setNewSearch(inputSearch);
    if (inputSearch === "") {
      setMatchedName(false);
    }
  };

  const filterSearch = (input) => {
    const searchResult = persons.filter((person) => {
      return person.name.toLowerCase() === input.toLowerCase();
    });
    if (searchResult.length !== 0) {
      setSearchedNames(searchResult);
      setMatchedName(true);
    }
  };

  return (
    <div>
      filter shown with <input onChange={handleSearch} value={newSearch} />
    </div>
  );
};

export default Filter;
