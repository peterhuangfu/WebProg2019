import React, { Component } from "react";
import './article.css';

export default class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="article-title"><b>{"【"+this.props.title+"】"}</b></div>
                <div><span>Last Update Time : {this.props.time}
                    <br /><br />
                    Written By {this.props.author}</span>
                </div>
                <hr />
                <div className="article-main">
                    <img src={this.props.source} alt="" className="article-img"></img>
                    <div className="article-text"><span>{this.props.content}</span></div>
                </div>
            </div>
        );
    }
}
