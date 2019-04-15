import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                                <NavLink to={"/posts/Computer"}>Read More</NavLink>
                            </article>

                            <hr />

                            <article>

                                <h1>Google</h1>
                                <p className="article_pub-date">Published
                                    <time datetime="2014-05-13" pubdate="">May 13, 2014</time>
                                </p>
                                <NavLink to={"/posts/Google"}>Read More</NavLink>
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
