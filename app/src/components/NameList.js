import React  from "react";
import Person from "./Person";
function NameList () {
    // const names = ['Kondal','James',"Durgam"]
    const persons  = [{
        id : 1,
        name : 'Kondal',
        age  : 12,
        skills : 'ReactJS'
    },
    {
        id : 2,
        name : 'duan',
        age  : 32,
        skills : 'Angualar'
    },
    {
        id : 3,
        name : 'Dwanons',
        age  : 20,
        skills : 'ReactJS'
    },
    {
        id : 4,
        name : 'Kondal',
        age  : 32,
        skills : 'SQL'
    }]
    const personList = persons.map(person=><Person key={person.id} person ={person} /> )
    return(
        <div>
            {
                personList
            }
        </div>
    )
}
export default NameList;