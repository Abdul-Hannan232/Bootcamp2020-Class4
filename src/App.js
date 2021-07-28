import { useState } from 'react';
import Message from './Message';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [day, setDay] = useState(true);

  return (
    <div className={ ` ${ day? "light" : "night" }  ` } >

      <h1>Good { day? "Morning" : "Night" } </h1>

      <Message counter={count} />


      <button onClick= { ()=> setCount(count + 1) } > Increment Counter </button>
      <button onClick= { ()=> setDay(!day) } > Update Day </button>


    </div>
  );
}

export default App;
