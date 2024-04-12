import personsService from "../services/persons";
import PersonDetail from "./PersonDetail";

const Persons = ({ matchedName, searchedNames, persons, setPersons }) => {
  const handleDelete = (id) => {
    const personById = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personById.name}?`)) {
      personsService.remove(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      {matchedName
        ? searchedNames.map((searchedName) => (
            <PersonDetail
              key={searchedName.name}
              name={searchedName.name}
              number={searchedName.number}
              handleDelete={handleDelete}
            />
          ))
        : persons.map((person) => (
            <PersonDetail
              key={person.name}
              name={person.name}
              number={person.number}
              id={person.id}
              handleDelete={handleDelete}
            />
          ))}
    </div>
  );
};

export default Persons;
