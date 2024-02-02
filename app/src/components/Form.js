import React, { Component } from "react";

class Form extends Component{
    constructor(){
        super();
        this.state = {
            value : "Enter the name",
            textarea: "",
            topic : 'React'
        }
    }
    handleChange = e => {
        this.setState({
            value : e.target.value
        })
    }
    handleCommentsChange = event=>{
        this.setState({
            textarea:event.target.value
        })
    }

    handleTopicChange = event=>{
        this.setState({
            topic:event.target.value
        })
    }
    haddleSubmit = (event)=>{
        alert(`${this.state.value} ${this.state.textarea} ${this.state.topic}` )
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.haddleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.textarea} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value={'REACT'}>REACT</option>
                        <option value={'JX'}>JX</option>
                        <option value={'C++'}>C++</option>
                    </select>
                    <button>submit</button>
                </div>
            </form>
            
        )
    }
}
export default Form