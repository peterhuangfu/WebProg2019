import React, { Component } from 'react';
import x from '../img/x.png';

class Item extends Component {

  render() {
    return (
      <li className="todo-app__item">
        <div className="todo-app__checkbox">
          <input type="checkbox" onClick={this.props.check} id={this.props.id}/>
          <label htmlFor={this.props.id}></label>
        </div>
        <h1 className="todo-app__item-detail">{this.props.content}</h1>
        <img className="todo-app__item-x" onClick={this.props.delete} src={x} alt="" id={this.props.id} />
      </li>
    );
  }
}

export default Item;
