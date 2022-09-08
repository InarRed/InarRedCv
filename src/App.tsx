import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const setNumber = () => {
    const cat = { name: 'Senya', age: 12 };
    console.log(cat);
    setNum(num + 1);
  };


  return (
    <div className='App'>
      <h1>Hello from Inar</h1>
      <p>asdfasfdasfdasdf</p>
      <p>Do you see it?</p>
      <p>test actions</p>
      <p>Count:{num}</p>
      <button onClick={setNumber}>Plus</button>
    </div>
  );
}

export default App;
