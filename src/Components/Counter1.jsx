import React, { Component } from 'react'

export default class Counter1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button
                    onClick={()=> this.props.onIncrement(this.props.id)}
                    className="btn btn-success">
                        Increment
                    </button>
                    <button onClick={()=> this.props.onDncrement(this.props.id)}
                    className="btn btn-danger">Decrement</button>
            </div>
        );
    }
}
