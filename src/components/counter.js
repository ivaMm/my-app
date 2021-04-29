import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return(
    <div className='counter-box'>
    <h3>Counter</h3>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>
  );
}

export { Counter }
