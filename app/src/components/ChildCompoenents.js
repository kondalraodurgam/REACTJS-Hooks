import React from "react";

function ChildComponents(props){
    console.log(props);
    return(
        <div>
            <button onClick={()=>props.greetHandle('Child')}>Child Component</button>
        </div>
    )
}

export default ChildComponents;