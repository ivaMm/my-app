import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Counter } from './components/counter';

/*
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


function AddPersonForm(props) {
  const [person, setPerson ] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if(person.match(/[a-zA-Z]+/)) {
      props.handleSubmit(person);
      setPerson(""); //clear value after adding a new person
    } else {
      alert("Not valid!")
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} >
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div className='contact-manager-box'>
      <h3>Contact Manager</h3>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function MyApp() {
  return(
    <div className="my-app">
      <Counter />
      <ContactManager data={contacts} />
    </div>
  );
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
