import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, userName } = this.props;
    return (
      <h1>
        Welcome {name} a . k t {userName}
      </h1>
    );
  }
}
export default Welcome;
