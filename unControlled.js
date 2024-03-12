import React, { useRef } from 'react';
import './style.css';

function App() {
  const inputRef = useRef('');

  const handleSubmit = () => {
    alert(`Input Value : ${inputRef.current.value}`);
  };

  return (
    <div>
      <h1>UnControlled Component</h1>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default App;
