import React, { Component } from "react";


class UserGreetings extends Component{
    constructor(){
        super();
        this.state = {
            isFalse : true
        }
    }
    render(){
            // if (this.state.isFalse) {
            //     return <div>
            //     Hello Prathussha
            // </div>
            // } else {
            //     return <div>
            //     Hello Guest
            // </div>
            // }
            // let message;
            // if (this.state.isFalse) {
            //     message =  <div>
            //     Hello Prathussha
            // </div>
            // }else {
            //     message = <div>Hello Guest</div>
            // }
            // return (
            //     <div>{message}</div>
            // )

            return this.state.isFalse && <div>Hello Prathusah</div>
         
    }
}

export  default  UserGreetings;