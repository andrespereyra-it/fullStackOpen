import personsService from "../services/persons";
import PersonDetail from "./PersonDetail";

const Persons = ({
  matchedName,
  searchedNames,
  persons,
  setPersons,
  setErrorMessage,
}) => {
  const handleDelete = (id) => {
    const personById = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personById.name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(
            `Information of '${personById.name}' has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      {matchedName
        ? searchedNames.map((searchedName) => {
            return (
              <PersonDetail
                key={searchedName.id}
                name={searchedName.name}
                number={searchedName.number}
                handleDelete={handleDelete}
              />
            );
          })
        : persons.map((person) => {
            return (
              <PersonDetail
                key={person.id}
                name={person.name}
                number={person.number}
                id={person.id}
                handleDelete={handleDelete}
              />
            );
          })}
    </div>
  );
};

export default Persons;
