import React, {useState} from 'react';
import {Message} from './Message';
import './App.css';

function App() {
  //Hooks
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Message counter={count} />
      <br />
      <button onClick={ () => {setCount(++count)} }>
        Update Counter
      </button>
      
      <button onClick={ () => {setMorning(!isMorning)} }>
        Update Day
      </button>
    </div>
  );
}

export default App;
