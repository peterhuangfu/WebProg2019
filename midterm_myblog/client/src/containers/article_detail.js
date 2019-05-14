import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Article from "../components/article";

const article_id = [];

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        for(let i = 0; i < 100; i++) {
            article_id.push(i.toString());
        }
        this.state = { id: '', author: '', title: '', content: '', img_source: '', time: '' };
    }

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
            if(originData.success) {
                this.setState(() => ({ id: originData.data.id, author: originData.data.author, title: originData.data.title, content: originData.data.content, img_source: originData.data.img_source, time: originData.data.time }));
            }
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
    }

    deleteArticle = async () => {
        const { id } = this.props.match.params;
        let trans = { id: id };
        await fetch('http://localhost:3001/api/deleteArticle', {
            method: 'DELETE',
            body: JSON.stringify(trans),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(res => {
            if(res.success)
                console.log(res);
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
        this.props.history.push('/articles');
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { id } = this.props.match.params;
        return id && article_id.includes(id) ? (
            <div>
                <button className="confirm_button" onClick={this.goBack}>返回</button>
                <button className="confirm_button" onClick={this.deleteArticle}>刪除</button>
                <button className="newPostButton"><NavLink className="link" to={"/updateArticle/" + id}>修改</NavLink></button>
                <Article id={id} title={this.state.title} source={this.state.img_source} author={this.state.author} content={this.state.content} time={this.state.time} />
            </div>
        ) : (
            <div>
                <h3>Article No.{id} NOT FOUND</h3>
            </div>
        );
    }
}
