import React from "react";

// function Greet(){
//     return <h1>Hello Kondal</h1>
// }

const Greet = (props) => {
  const { name, userName } = props;
  // [name, userName] = props
  return (
    <div>
      <h1>
        {" "}
        Hello {name} a. k.s {userName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
export default Greet;
