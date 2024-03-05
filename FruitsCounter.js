import React from "react";

function FruitsCounter(props){
    return(
        <div>
            Fruits Count : {props.fruits.length}
        </div>
    )
}
export default FruitsCounter;