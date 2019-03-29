import React, { Component } from 'react';
import Section from './components/section';
import Footer from './components/footer';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], command: 'all', left: 0 };
  }

  update = (data) => { 
    this.setState(state => ({ list: state.list.concat(data) }));
  }

  update_num = (num) => {
    this.setState(() => ({ left: num }));
  }

  filterAll = () => { this.setState(() => ({ command: 'all' })); };
  filterAct = () => { this.setState(() => ({ command: 'active' })); };
  filterCom = () => { this.setState(() => ({ command: 'completed' })); };

  clean_complete = () => {
    
  };

  render() {
    return (
      <div className="todo-app__root">
        <header className="todo-app__header"><h1 className="todo-app__title">TODO</h1></header>
        <Section update={this.update} 
                 update_num={this.update_num}
                 command={this.state.command}/>

        <Footer filterAll={this.filterAll}
                filterAct={this.filterAct}
                filterCom={this.filterCom}
                clean={this.clean_complete}
                left={this.state.left}/>
      </div>
    );
  }
}

export default Homepage;
