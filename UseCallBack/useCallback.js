import React, { useState, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependencies array: re-create the callback only if 'count' changes

  return (
    <div>
      <h1>UseCallBack Hook</h1>
      <h3>Count {count} </h3>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

function ChildComponent({ onClick }) {
  return (
    <div>
      <h2>Child Componet useCallback</h2>
      <button onClick={onClick}>Increase Count</button>
    </div>
  );
}

export default App;
