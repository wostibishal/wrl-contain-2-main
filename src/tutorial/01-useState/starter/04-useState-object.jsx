import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hubby: 'Read Books',
  });
  const displayPerson = () => {
    setPerson({ name: 'john', age: 28, hubby: 'Scream At The Computer' });
  };
  return (
    <dev>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h3>Enjoys To: {person.hubby}</h3>
      <button className="btn" onClick={displayPerson}>
        Next person
      </button>
    </dev>
  );
};

export default UseStateObject;
