import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Articles from "./articles";
import ArticleList from "./article_list";
import Home from './home';
import Profile from './profile';

export default class Blog extends Component {
    render() {
        const clear = { clear: 'both' };
        return (
            <div>
                <header>
                    <div className="homepage-header">
                        <div className="homepage-title"><h1>My &nbsp;Blog</h1></div>
                        <div className="homepage-nav">
                            <button><NavLink className="nav_link" to="/profile">Profile</NavLink></button>
                        </div>
                        <div className="homepage-nav">
                            <button><NavLink className="nav_link" to="/articles">Article</NavLink></button>
                        </div>
                        <div className="homepage-nav">
                            <button><NavLink className="nav_link" to="/home">Home</NavLink></button>
                        </div>
                        <div style={clear}></div>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/articles" component={Articles} />
                    <Route path="/articles/:id?" component={ArticleList} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Redirect from="/home" to="/" />
                </Switch>
                <footer className="homepage-footer">
                    copyright@ Behusky2245
                </footer>
            </div>
        );
    }
}
