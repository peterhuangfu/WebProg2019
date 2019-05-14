import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Articles from "./articles";
import ArticleDetail from "./article_detail";
import UpdateArticle from "./update_article";
import PostArticle from "./post_article";
import UpdateProfile from "./update_profile";
import Home from './home';
import Profile from './profile';
import './blog.css';

export default class Blog extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const clear = { clear: 'both' };
        return (
            <div>
                <header>
                    <div className="homepage-header">
                        <div className="homepage-title"><h1><NavLink className="nav_title" to="/home">Byhusky2245</NavLink></h1></div>
                        <div className="nav_container">
                            <div className="homepage-nav">
                                <button id="nav_link_butt1" className="nav_link_butt"><NavLink className="nav_link" to="/home"><b>首頁</b></NavLink></button>
                                <button id="nav_link_butt2" className="nav_link_butt"><NavLink className="nav_link" to="/articles"><b>文章列表</b></NavLink></button>
                                <button id="nav_link_butt3" className="nav_link_butt"><NavLink className="nav_link" to="/profile"><b>個人檔案</b></NavLink></button>
                                <hr className="nav_hr" />
                            </div>
                            <div style={clear}></div>
                        </div>
                    </div>
                </header>
                <section className="homepage-section">
                    <Switch>
                        <Route exact path="/articles" component={Articles} />
                        <Route path="/articles/:id?" component={ArticleDetail} />
                        <Route path="/updateArticle/:id?" component={UpdateArticle} />
                        <Route path="/postArticle/" component={PostArticle} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/updateProfile" component={UpdateProfile} />
                        <Route path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Redirect from="/home" to="/" />
                    </Switch>
                </section>
                <footer className="homepage-footer">
                    copyright@ Behusky2245
                </footer>
            </div>
        );
    }
}
