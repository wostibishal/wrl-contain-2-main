import { data } from '../../../data';
import React from 'react';
const UseStateArray = () => {
  
  
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(people.filter((person) => person.id !== id));
  };
  const clearAllItem = () => {
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <dir key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </dir>
        );
      })}
      {people.length < 1?(empty):(<button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={clearAllItem}
      >
        clear item
      </button>)}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={resetList}
      >
        reset
      </button>
      
    </div>
  );
};

export default UseStateArray;
