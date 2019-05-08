import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/blog';
import './App.css';

class Homepage extends Component {
  componentDidMount() {
    // if(this.socket !== undefined) {
    //   console.log("Connected to sockets!");
    // }
    this.callApi()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/hello');
    // const bo = await response.json();
    await console.log(response);

    if (response.status !== 200) 
      throw Error('Error!');
    return (response);
  }

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
