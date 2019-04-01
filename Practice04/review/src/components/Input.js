import React, { Component } from 'react';
import './styles.css';

class Input extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <input id={this.props.id} type={this.props.type} className={this.props.className} placeholder={this.props.placeholder} onKeyUp={this.props.onKeyUp}></input>
        )
    }
}

export default Input;
