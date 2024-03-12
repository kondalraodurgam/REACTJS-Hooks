import React, { useState } from 'react';
import './style.css';

function App() {
  const [input, setInput] = useState('');

  const handleClickInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2>Controlled Component</h2>
      <h3>Typed value :{input}</h3>
      <div>
        <input type="text" value={input} onChange={handleClickInput} />
      </div>
    </div>
  );
}
export default App;
