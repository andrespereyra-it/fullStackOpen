import React from "react";

const PersonDetail = ({ name, number }) => {
  return (
    <p>
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
              key={searchedName.name}
              name={searchedName.name}
              number={searchedName.number}
            />
          ))
        : persons.map((person) => (
            <PersonDetail
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))}
    </div>
  );
};

export default Persons;
