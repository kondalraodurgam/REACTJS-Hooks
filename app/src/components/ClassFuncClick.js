import React, { Component } from "react";

class ClassFuncClick extends Component {
  handleClick() {
    console.log("Clicked Class function");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Class Component Click</button>
      </div>
    );
  }
}

export default ClassFuncClick;
