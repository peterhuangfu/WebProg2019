import React, { Component, Fragment } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Home from "./Home";

import "./css/foundation.css";
import "./css/header.css";
import "./css/icon-fonts.css";
import "./css/hover.css";
import "./css/footer-bottom.css";
import "./css/menu.css";
import "./css/blog.css";
import "./css/fonts.css";
import "./css/color.css";


export default class Blog extends Component {
    render() {
        return (
        <Fragment>
            <div>
                <nav className="top-bar" data-topbar>
                    <ul className="title-area">
                        <li className="name">
                            <h1>
                                <a href="./">Pierre Blog
                                </a>
                            </h1>
                        </li>
                        <li className="toggle-topbar menu-icon">
                            <a href="#">
                                <span>Menu</span>
                            </a>
                        </li>
                    </ul>

                    <section className="top-bar-section">
                        <ul className="left">
                            <li className=" menu-icon" id="home-icon">
                                <NavLink to="/home">
                                    <i className="icon-home"></i>
                                    <span className="name">
                                        Home
                                    </span>
                                </NavLink>
                            </li>
                            <li className=" menu-icon" id="blog-icon">
                                    <NavLink to="/posts">
                                        <i className="icon-blog"></i>
                                        <span className="name">Posts</span>
                                    </NavLink>
                            </li>
                            <li className=" menu-icon" id="contact-icon">
                                    <NavLink to="/authors">
                                        <i className="icon-contact"></i>
                                        <span className="name">Author</span>
                                    </NavLink>
                            </li>
                        </ul>

                        <ul className="title-area" id="menu-titles">
                            <li className="name hidden" id="home-text">
                                <h1>
                                    <a href="./">Home
                                    </a>
                                </h1>
                            </li>
                            <li className="name hidden" id="blog-text">
                                <h1>
                                    <a href="/blog/">Blog
                                    </a>
                                </h1>
                            </li>
                            <li className="name hidden" id="contact-text">
                                <h1>
                                    <a href="/#contact">Contact
                                    </a>
                                </h1>
                            </li>

                        </ul>

                        <ul className="right">
                            <li className=" menu-icon">
                                <a href="#">
                                    <i className="icon-facebook"></i>
                                </a>
                            </li>
                            <li className=" menu-icon">
                                <a href="#">
                                    <i className="icon-twitter"></i>
                                </a>

                            </li>
                            <li className=" menu-icon">
                                <a href="#">
                                    <i className="icon-feed"></i>
                                </a>
                            </li>
                        </ul>
                    </section>
                </nav>
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/posts/:id?" component={PostRender} />
                    <Redirect from="/home" to="/" />
                </Switch>
            </div>
        </Fragment>
        );
    }
}


/*
export default className Blog extends Component {
    render() {
        return (
            <div>
                <button>
                    <NavLink to="/home">Home</NavLink>
                </button>
                <button>
                    <NavLink to="/posts">Posts</NavLink>
                </button>
                <button>
                    <NavLink to="/authors">Authors</NavLink>
                </button>
                <hr />
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:id?" component={PostRender} />
                    <Redirect from="/home" to="/" />
                </Switch>
            </div>
        );
    }
}
*/