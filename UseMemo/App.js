import React, { useMemo, useState } from 'react';

const ExpensionComponent = ({ data }) => {
  const [inputValue, setInputValue] = useState('');

  const filteredData = useMemo(() => {
    // Simulating a costly computation (filtering data based on input value)
    console.log('Filtering data...', inputValue);
    return data.filter((item) => item.includes(inputValue));
  }, [data, inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form className="Feild">
        <label>Input</label>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      <ul>
        {filteredData.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const data = ['Apple', 'Banana', 'Fish', 'Tamata', 'Cherries'];
  return (
    <div>
      <h1>Use Memo</h1>
      <ExpensionComponent data={data} />
    </div>
  );
};

export default App;
