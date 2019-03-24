import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

function Post(props) {
    return <div className="date-outer">
            <h2 className="date-header">{props.date}</h2>
            <div className="date-posts">
                <h3>{props.post_title}</h3>
                <p className="post-body">
                    {props.post_body}
                </p>
            </div>
        </div>
        ;
}

class Blog extends Component {
    render() {
        return (
            <div className="content-outer content-inner">
                <header>
                    <div className="header-outer header-inner">
                        <div className="titlewrapper">
                            <h1 className="blog-title">doraeric's blog</h1>
                        </div>
                        <div className="descriptionwrapper">
                            <p>OwO OAO OuO or 1=1</p>
                        </div>
                    </div>
                </header>
                <div className="main-outer main-inner">
                    <div className="column-center">
                        <Post date="2019-03-24" post_title="SITCON 2019" post_body="今天是 SITCON 2019，小傑好帥！還吃了兩個義美冰淇淋～" />
                    </div>
                    <div className="column-right">
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
