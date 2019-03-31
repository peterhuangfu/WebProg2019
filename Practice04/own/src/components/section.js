import React, { Component } from 'react';
import Item from '../containers/item';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 , list: [], clear: this.props.clear, del: [] };
    this.arg = [];
  }

  check = (id) => {
    for(let i = this.state.del.length-1; i >= 0; i--)
      this.arg.splice(this.state.del[i], 1);
    this.setState(() => ({ del: [] }));
    const index = this.arg.indexOf(parseInt(id));
    this.setState(state => state.list[index].isComplete = !state.list[index].isComplete);
    this.setState(state => (state.list[index].node = <Item id={state.list[index].node.props.id} isComplete={state.list[index].isComplete} check={state.list[index].node.props.check} delete={state.list[index].node.props.delete} content={state.list[index].node.props.content}/>));
    setTimeout(() => this.props.update_num(this.state.list.filter(e => !e.isComplete).length), 100);
  };

  del = e => {
    for(let i = this.state.del.length-1; i >= 0; i--)
      this.arg.splice(this.state.del[i], 1);
    this.setState(() => ({ del: [] }));
    const index = this.arg.indexOf(parseInt(e.target.id));
    this.setState(state => state.list.splice(index, 1));
    this.arg.splice(index, 1);
    setTimeout(() => this.props.update_num(this.state.list.filter(e => !e.isComplete).length), 100);
  };

  handler = e => {
    if(e.key === 'Enter' && e.target.value.trim() !== '') {
      const content = e.target.value.trim();
      const newItem = { node: <Item id={this.state.id} isComplete={false} check={this.check} delete={this.del} content={content}/>, isComplete: false };
      this.arg.push(this.state.id);
      this.setState(state => ({ id: state.id + 1 }));
      this.setState(state => ({ list: state.list.concat([newItem]) }));
      e.target.value = '';
      setTimeout(() => this.props.update_num(this.state.list.filter(e => !e.isComplete).length), 100);
    }
  };

  static getDerivedStateFromProps(props, state) {
    if(props.clear !== state.clear && props.clear === true) {
      let t = state.list.filter(e => e.isComplete);
      t = t.map(e => e.node.props.id);
      return { list: state.list.filter(e => !e.isComplete), del: t };
    }
    return null;
  }

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
              else return <div key={i}></div>
            }
            else if(situation === 'completed') {
              if(item.isComplete === true) {
                return <div key={i}>{item.node}</div>;
              }
              else return <div key={i}></div>
            }
            else if(situation === 'all') {
              return <div key={i}>{item.node}</div>;
            }
            return <div key={i}></div>;
          })}
        </ul>
      </section>
    );
  }
}

export default Section;
