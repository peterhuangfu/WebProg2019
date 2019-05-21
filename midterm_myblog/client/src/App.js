import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Blog from './containers/blog';

class Homepage extends Component {
  render() {
    return (
      <HashRouter>
				<div>
					<Blog />
				</div>
			</HashRouter>
    );
  }
}

export default Homepage;
