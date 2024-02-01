import React, { Component } from "react";
import  ChildComponents from "./ChildCompoenents"

class ParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            name : "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello   ${this.state.name}  ${childName}` )
    }

    render(){
        return(
            <div>
                <ChildComponents  greetHandle={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;