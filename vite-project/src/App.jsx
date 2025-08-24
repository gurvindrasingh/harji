import { use, useState } from 'react';
import './App.css'
import Model from './Image'; // line 5 of README
import Nav from './Navbar';

function Component() {
  return (
    <div>
      {/* {2+2} line 2 of README */}
      {/*line 3 of README for div*/}
      <h1>This is a Component</h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio sint blanditiis assumenda consequuntur voluptatem, cumque numquam deserunt a? Reiciendis dolorum reprehenderit maiores, neque ullam id minus voluptas quo! Totam.
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0); // line 7 of readme on state.

  function increment() {
    setCount(count + 1);

  }
  return (
    <div>
      <Component/> {/*line 4 of README*/}
      <Model/>
      <Nav title ="My Navbar" number ={1}/> {/* line 6 of README */}
      <Nav data = {count}/> {/* line 6 of README */}
      <Nav/>
       <button onClick={increment}>Increment</button>
      {count}
    </div>
  )
}

export default App
