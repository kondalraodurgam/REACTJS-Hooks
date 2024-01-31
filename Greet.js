import React  from "react";

// function Greet(){
//     return <h1>Hello Kondal</h1>
// }

const Greet = props => {
    return (
        <div>
            <h1> Hello {props.name} a. k.s {props.userName}</h1> 
            {props.children}
        </div>
    )
}
export default Greet;