
import { useState } from 'react';
import './App.css'

function App() {

let [Count, setcount] = useState(0);

const increment = () => {
   setcount(Count + 1);
};

const decrement = () => {
  setcount(Count - 1);
};

const reset = () => {
  setcount(0);
};

  return (
  <>
      <h1>Counter App</h1>
      <p>Count : {Count}</p>

      <div className='button-container'>
        <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>
    </>
  )
};

export default App
 