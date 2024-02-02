import React from "react";

function Person ({person}){
    return(
        <div>
            <h1>Am a {person.name} my age {person.age}  and Skill with {person.skills} </h1>
        </div>
    )
}
export default Person;