import React, { Component } from 'react';
import Section from './components/section';
import Footer from './components/footer';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { command: 'all', left: 0 };
  }

  update_num = (num) => {
    this.setState(() => ({ left: num }));
  };

  filterAll = () => { this.setState(() => ({ command: 'all'})); }
  filterAct = () => { this.setState(() => ({ command: 'active'})); };
  filterCom = () => { this.setState(() => ({ command: 'completed'})); };
  clear = () => { 

  };

  render() {
    return (
      <div className="todo-app__root">
        <header className="todo-app__header"><h1 className="todo-app__title">TODO</h1></header>
        <Section command={this.state.command}
                 update_num={this.update_num}/>
        <Footer filterAll={this.filterAll}
                filterAct={this.filterAct}
                filterCom={this.filterCom}
                clear={this.clear}
                left={this.state.left}/>
      </div>
    );
  }
}

export default Homepage;
