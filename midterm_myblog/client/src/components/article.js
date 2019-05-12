import React, { Component } from "react";

export default class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="article-title"><b>{"This is article "+this.props.title}</b></div>
                <div>
                    <span>ID : {this.props.id}
                    <br /><br />
                    Post Time : {this.props.time}
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
