import React, { Component } from "react"

export default class Counter extends Component {
    constructor(){
        super()
        console.log('Component Constructor called')
    }
    state={
        count:0
    };
    
    increment=() =>{
        this.setState({count: this.state.count +1});
    };
    decrement=() =>{
        this.setState({count: this.state.count -1});
    };
    render() {
        console.log("component render");
        return (
            <div>
                <h1 className={this.state.count>=0? "green":"red"} >
                    {this.state.count}
                </h1>
                <button onClick={this.increment} className="btn btn-success ">
                    Increment
                </button>
                <button onClick={this.decrement} className="btn btn-danger ">Decrement</button>
            </div>
        )
    }
}
