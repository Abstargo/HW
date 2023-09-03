import React from "react";
import { Component } from "react";


export default class MyComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="challenge-node">
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))