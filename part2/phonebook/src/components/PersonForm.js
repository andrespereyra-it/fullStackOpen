import { useState } from "react";
import personsService from "../services/persons";

const PersonForm = ({
  persons,
  setPersons,
  setSuccessMessage,
}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    const existingContact = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingContact) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        personsService
          .update(existingContact.id, inputData)
          .then(() => {
            const updatedPersons = persons.map((person) =>
              person.id === existingContact.id
                ? { ...person, number: newNumber }
                : person
            );
            setPersons(updatedPersons);
            setSuccessMessage(
              `${existingContact.name}'s number updated successfully`
            );
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      personsService
        .create(inputData)
        .then((res) => {
          setSuccessMessage(`Added ${res.data.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
          setPersons(persons.concat(inputData));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleName} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumber} value={newNumber} />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
