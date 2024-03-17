import React, { useState } from 'react';

function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label>{isChecked ? 'Checked' : 'Unchecked'}</label>
    </div>
  );
}

export default ControlledCheckbox;
