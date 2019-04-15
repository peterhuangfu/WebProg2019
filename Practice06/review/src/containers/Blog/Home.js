import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./css/foundation.css";
import "./css/header.css";
import "./css/icon-fonts.css";
import "./css/hover.css";
import "./css/footer-bottom.css";
import "./css/menu.css";
import "./css/blog.css";
import "./css/fonts.css";
import "./css/color.css";

import computer from "./img/desktop2.png"
import seo from "./img/seo.png";

export default class Posts extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section id="main-content">

                    <div className="row">

                        <div className="large-9 columns" role="content">

                            <article>

                                <h1>Computer</h1>
                                <p className="article_pub-date">Published
                                    <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                                </p>

                                <div className="row">
                                    <div className="large-12 columns">
                                        <img className="float-right" src={computer} />
                                        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>
                                        <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                                    </div>
                                </div>
                            <a href="#" className="button">Read More</a>
                            </article>

                            <hr />

                            <article>

                                <h1>Google</h1>
                                <p className="article_pub-date">Published
                                    <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                                </p>
                                <div className="row">
                                    <div className="large-12 columns">
                                        <img className="float-left" src={seo} />
                                        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.</p>
                                        <p>Boudin aliqua adipisicing rump corned beef. Nulla corned beef sunt ball tip, qui bresaola enim jowl. Capicola short ribs minim salami nulla nostrud pastrami.</p>
                                    </div>
                                </div>
                            <a href="#" className="button">Read More</a>
                            </article>

                        </div>

                        <aside className="large-3 columns">

                            <h5>Categories</h5>
                            <div className="ui secondary vertical pointing menu">
                                <a href="#" className="active item">News</a>
                                <a href="#" className="item">Code</a>
                                <a href="#" className="item">Design</a>
                                <a href="#" className="item">Fun</a>
                                <a href="#" className="item">Weasels</a>
                            </div>

                            <div className="ui vertical menu">
                                <div className="header item">
                                    <i className="icon-page"></i>
                                    Recent Posts
                                </div>

                                <div className="item">
                                    <a href="#"><h6>Pork Sausage News!</h6> <p>Pork sausages health benefits proved by government...</p></a>
                                </div>
                                <div className="item">
                                    <a href="#"><h6>More Amazing Pork Sausage News!</h6> <p>Pork sausages better than viagra...</p></a>
                                </div>
                            </div>

                            <div className="ui vertical menu">
                                <div className="header item">
                                    <i className="icon-page"></i>
                                    Popular Posts
                                </div>
                                <div className="item">
                                    <a href="#"><h6>Pork Sausage News!</h6> <p>Pork sausages health benefits proved by government...</p></a>
                                </div>
                                <div className="item">
                                    <a href="#"><h6>More Amazing Pork Sausage News!</h6> <p>Pork sausages better than viagra...</p></a>
                                </div>
                            </div>            
                        </aside>
                    </div>
                </section>
                <div className="page-footer-bottom">
                    <div className="row">
                        <div className="medium-4 medium-4 push-8 columns">

                            <ul className="home-social">
                                <li>
                                    <a href="http://www.twitter.com/" className="twitter"></a>
                                </li>
                                <li>
                                    <a href="http://www.facebook.com/" className="facebook"></a>
                                </li>
                                <li>
                                    <a href="/contact" className="mail"></a>
                                </li>
                            </ul>
                        </div>
                        <div className="medium-8 medium-8 pull-4 columns">
                            <ul className="site-links">
                                <li className="name">
                                    <a href="./">Website Name</a>
                                </li>
                                <li>
                                    <a href="./">Home</a>
                                </li>
                                <li>
                                    <a href="./">Blog</a>
                                </li>
                                <li>
                                    <a href="./">News & Events</a>
                                </li>
                            </ul>
                            <p className="copyright">© 2014 Website. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}