import React, { Component } from 'react';
import Item from '../containers/item';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 , list: [] };
  }

  check = e => {
    const index = e.target.id;
    this.setState(state => state.list[index].isComplete = !state.list[index].isComplete);
    // this.setState(state => state.list[index].node );
  };

  del = () => {

  };

  handler = e => {
    if(e.key === 'Enter' && e.target.value.trim() !== '') {
      const content = e.target.value.trim();
      const newItem = { node: <Item id={this.state.id} check={this.check} delete={this.del} content={content}/>, isComplete: false };
      this.setState(state => ({ id: state.id + 1 }));
      this.setState(state => ({ list: state.list.concat([newItem])}));
      e.target.value = '';
    }
  };

  render() {
    return (
      <section className="todo-app__main">
        <input className="todo-app__input" placeholder="What needs to be done ?" onKeyPress={this.handler}/>
        <ul className="todo-app__list" id="todo-list">
          { this.state.list.map(function(item, i) {
              return <div key={i}>{item.node}</div>;
          }) }
        </ul>
      </section>
    );
  }
}

export default Section;
