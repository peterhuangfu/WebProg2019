import React, { Component } from "react";

export default class Home extends Component {
    render() {
        const style = { textAlign: 'center', color: 'rgb(1, 107, 163)', fontSize: '50px' };
        return (
            <div>
                <h1 style={style}>Welcome to my Blog</h1>
            </div>
        );
    }
}
