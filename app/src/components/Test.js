import React from "react";

function Test(props){
    return (
        <div>
            <h1>Child Contrlled Component</h1>
            <input type="text"  onChange={props.handleChange} />
        </div>
    )
}
export default Test;