import React, { Component } from 'react';
import Section from './components/section';
import Footer from './components/footer';

class Homepage extends Component {
  render() {
    return (
      <div className="todo-app__root">
        <header className="todo-app__header"><h1 className="todo-app__title">TODO</h1></header>
        <Section />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
