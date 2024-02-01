import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementValue() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  decrementValue() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Count Value : {this.state.count}</h1>
        <button onClick={() => this.incrementValue()}>Increment </button>
        <button onClick={() => this.decrementValue()}>Decreement</button>
      </div>
    );
  }
}
export default Counter;
