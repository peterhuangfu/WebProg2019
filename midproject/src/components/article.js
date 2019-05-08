import React, { Component } from "react";

export default class Article extends Component {
    render() {
        const getTime = new Date();
        const time = {
        year: getTime.getFullYear().toString(),
        month: getTime.getMonth().toString(),
        day: getTime.getDate().toString(),
        hour: getTime.getHours().toString(),
        min: getTime.getMinutes().toString(),
        second: getTime.getSeconds().toString()
    };
  
        return (
            <div className="article">
                <div className="article-title"><b>{this.props.name}</b></div>
                <div>
                    <span>Post Time : {time.year}/{time.month}/{time.day} &nbsp;{time.hour}:{time.min}:{time.second}
                    <br /><br />
                    Written By {this.props.author}</span>
                </div>
                <hr />
                <div className="article-main">
                    <img src={this.props.source} alt="" className="article-img"></img>
                    <div className="article-text"><span>{this.props.descrip}</span></div>
                </div>
            </div>
        );
    }
}
