import React from "react";

const PersonDetail = ({ name, number }) => {
  return (
    <p key={name}>
      {name} {number}
    </p>
  );
};

const Persons = ({ matchedName, searchedNames, persons }) => {
  return (
    <div>
      {matchedName
        ? searchedNames.map((searchedName) => (
            <PersonDetail
              name={searchedName.name}
              number={searchedName.number}
            />
          ))
        : persons.map((person) => (
            <PersonDetail name={person.name} number={person.number} />
          ))}
    </div>
  );
};

export default Persons;
