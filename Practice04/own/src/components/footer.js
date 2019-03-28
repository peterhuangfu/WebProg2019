import React, { Component } from 'react';
import Button from '../containers/button';

class Footer extends Component {
//   constructor(props) {
//     super(props);
//   }
  filterAll = () => {
    
  };

  filterActive = () => {
      
  };

  filterCompleted = () => {
      
  };

  clean_complete = () => {
    
  };

  render() {
    return (
      <footer className="todo-app__footer">
        <div className="todo-app__total"><span></span></div>
        <ul className="todo-app__view-buttons">
          <li><Button name="All" onClick={this.filterAll}/></li>
          <li><Button name="Active" onClick={this.filterActive}/></li>
          <li><Button name="Completed" onClick={this.filterCompleted}/></li>
        </ul>
        <div className="todo-app__clean"><Button name="Clear Completed" onClick={this.clean_complete} /></div>
      </footer>
    );
  }
}

export default Footer;
