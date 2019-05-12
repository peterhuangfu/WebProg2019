import React, { Component } from "react";

export default class DeleteArticle extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        let trans = { id: id };
        fetch('http://localhost:3001/api/getOneArticle', { 
            method: 'POST',
            body: JSON.stringify(trans),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success)
                console.log(originData.data);
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
    }

    render() {
        const article_id = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const { id } = this.props.match.params;
        return (
            <div className="article">
                {/* <div className="article-title"><b>{this.props.name}</b></div>
                <div>
                    <span>Post Time : {time.year}/{time.month}/{time.day} &nbsp;{time.hour}:{time.min}:{time.second}
                    <br /><br />
                    Written By {this.props.author}</span>
                </div>
                <hr />
                <div className="article-main">
                    <img src={this.props.source} alt="" className="article-img"></img>
                    <div className="article-text"><span>{this.props.descrip}</span></div>
                </div> */}
            </div>
        );
    }
}
