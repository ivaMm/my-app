import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

function AddPersonForm() {
  const [person, setPerson ] = useState
  ("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDeafault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person.name} />
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

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
const el = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
);
ReactDOM.render(
  el,
  document.getElementById('root')
)
