import React, { useRef } from "react";

function Uncontrolled() {
    const inputRef = useRef('');
    const submitHandle = (e)=>{
        e.preventDefault();
        alert(inputRef.current.value)
    }
    return (
        <div>
            <h1>UnControlled Compoent</h1>
            {/* <h2></h2> */}
            <form onSubmit={submitHandle}>
                <input type="text" ref={inputRef}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Uncontrolled;