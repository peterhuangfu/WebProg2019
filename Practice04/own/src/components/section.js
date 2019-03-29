import React, { Component } from 'react';
import Item from '../containers/item';

class Section extends Component {
  constructor(props) {
    super(props);
    // this.state = { id: 0, list: [] };
    this.state = { id: 0 , list: [] };
    this.list = [];
  }

  check = e => {
    const index = e.target.id;
    this.setState(state => state.list[index].isComplete = !state.list[index].isComplete);
    // this.list[index].isComplete = !this.list[index].isComplete;
    this.props.update_num(this.state.list.map(e => !e.isComplete).length);
  };

  del = e => {
    const index = e.target.id;
    this.setState(state => state.list.splice(index, 1));
    console.log(this.state.list);
    this.props.update_num(this.state.list.map(e => !e.isComplete).length);
  };

  handler = e => {
    if(e.key === 'Enter' && e.target.value.trim() !== '') {
      const content = e.target.value.trim();
      const newItem = { node: <Item id={this.state.id} check={this.check} delete={this.del} content={content}/>, isComplete: false };
      this.setState(state => ({ id: state.id + 1 }));
      this.setState(state => ({ list: state.list.concat([newItem])}));
      // this.list.push([newItem]);
      this.props.update([newItem]);
      this.props.update_num(this.state.list.map(e => !e.isComplete).length);
      e.target.value = '';
    }
  };

  render() {
    const situation = this.props.command;
    return (
      <section className="todo-app__main">
        <input className="todo-app__input" placeholder="What needs to be done ?" onKeyPress={this.handler}/>
        <ul className="todo-app__list" id="todo-list">
          { this.state.list.map(function(item, i) {
            if(situation === 'active') {
              if(item.isComplete === false) {
                return <div key={i}>{item.node}</div>;
              }
            }
            else if(situation === 'completed') {
              if(item.isComplete === true) {
                return <div key={i}>{item.node}</div>;
              }
            }
            else {
              return <div key={i}>{item.node}</div>;
            }
            // return <div key={i}>{item.node}</div>;
          })}
        </ul>
      </section>
    );
  }
}

export default Section;
