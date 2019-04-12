import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/blog';
import './App.css';

class Homepage extends Component {
  render() {
    return (
      <BrowserRouter>
				<div className="homepage">
					<Blog />
				</div>
			</BrowserRouter>
    );
  }
}

export default Homepage;
