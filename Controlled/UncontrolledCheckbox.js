import React, { useRef } from 'react';

function UncontrolledCheckbox() {
  const checkboxRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Checkbox Value: ' + checkboxRef.current.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        ref={checkboxRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledCheckbox;
