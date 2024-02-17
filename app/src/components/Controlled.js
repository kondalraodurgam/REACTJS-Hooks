import React, { useState } from 'react'
import Test from './Test';
function Controlled() {
    const [name, setName] = useState('');

    const handleChange = (e)=>{
        setName(e.target.value)
    }
    return(
        <div>
            <h1>Controlled Component</h1>
            <h2>Name : {name}</h2> 
            <input type="text" onChange={handleChange} />
            <Test handleChange={handleChange} />
        </div>
    )
}
export default Controlled;