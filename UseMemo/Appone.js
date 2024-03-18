import React, { useState, useMemo } from 'react';

const ItemList = ({ items }) => {
  const [filter, setFilter] = useState('');

  // Memoizing the filtered list to prevent re-calculations on every render
  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  }, [items, filter]);

  return (
    <div>
      <input 
        type="text" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        placeholder="Filter items" 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Appone = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Appone;
