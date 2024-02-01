import React from "react";

function FunctionClick() {
  function handleClick() {
    console.log("clicked Fucnion");
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FunctionClick;
