import React from "react";

const Filter = ({ handleSearch, newSearch }) => {
  return (
    <div>
      filter shown with <input onChange={handleSearch} value={newSearch} />
    </div>
  );
};

export default Filter;
