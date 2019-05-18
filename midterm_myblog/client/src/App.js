import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/blog';

class Homepage extends Component {
  render() {
    return (
      <BrowserRouter>
				<div>
					<Blog />
				</div>
			</BrowserRouter>
    );
  }
}

export default Homepage;
