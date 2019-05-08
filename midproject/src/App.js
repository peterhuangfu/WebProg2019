import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/blog';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect("http://localhost:3001");
class Homepage extends Component {
  // componentDidMount() {
    
  //   this.callApi()
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   socket.emit('init', 'initial.');

  //   socket.on('init', msg => {
  //     console.log(msg);
  //   });
  //   return ('First connect.');
  // }

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
