import React, { createElement } from "react";

const Hello = ()=> {
    // return <h1>Hello UmaDevi</h1>

    return React.createElement("div",{id:'hello', className :"App"}, React.createElement("h1",{className:"App"}, "Hello JSX World"))
}
export default Hello;