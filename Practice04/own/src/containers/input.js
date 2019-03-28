import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input  className={this.props.className}
              type={this.props.type}
              placeholder={this.props.placeholder} 
              onKeyPress={this.props.onKeyPress}>
      </input>
    );
  }
}

export default Input;
