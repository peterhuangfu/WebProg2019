import React, { Component } from 'react';
import Button from '../containers/button';

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <footer className="todo-app__footer">
        <div className="todo-app__total"><span>{this.props.left} left</span></div>
        <ul className="todo-app__view-buttons">
          <li><Button name="All" onClick={this.props.filterAll}/></li>
          <li><Button name="Active" onClick={this.props.filterAct}/></li>
          <li><Button name="Completed" onClick={this.props.filterCom}/></li>
        </ul>
        <div className="todo-app__clean"><Button name="Clear Completed" onClick={this.props.clean} /></div>
      </footer>
    );
  }
}

export default Footer;
