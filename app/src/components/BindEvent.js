import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    this.hadleClick = this.hadleClick.bind(this);
  }
  // hadleClick(){
  //     this.setState({
  //         message : "Good Bye"
  //     })
  //     console.log(this)
  // }

  hadleClick = () => {
    this.setState({
      message: "Good Bye",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.handleClikc}>Click</button> */}
        {/* <button onClick={this.hadleClick.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.hadleClick()}>Click</button> */}
        <button onClick={this.hadleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;
