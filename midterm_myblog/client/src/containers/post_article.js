import React, { Component } from "react";
import './edit.css';

export default class DeleteArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', title: '', content: '', img_source: '', time: '' };
    }

    newPost = async () => {
        let today = new Date();
        await this.setState(() => ({ time: today.getFullYear().toString()+'-'+(today.getMonth()+1).toString()+'-'+today.getDate().toString() }));
        let data = { title: this.state.title, author: this.state.author, time: this.state.time, content: this.state.content, img_source: this.state.img_source };
        await fetch('http://localhost:3001/api/postArticle', {
            method: 'POST',
            body: JSON.stringify(data),
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
        this.clear();
        this.props.history.push('/articles');
    }

    clear = () => {
        this.setState(() => ({ author: '', title: '', content: '', img_source: '', time: '' }));
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className="post-edit_block">
                    <textarea className="title-block" type="text" onChange={e => this.setState({ title: e.target.value })} placeholder="請輸入文章標題..." name="topic" value={this.state.title} />
                    <br /><textarea className="author-block" type="text" onChange={e => this.setState({ author: e.target.value })} placeholder="請輸入你的名字..." name="author" value={this.state.author} />
                    <br /><textarea className="content-block" type="text" onChange={e => this.setState({ content: e.target.value })} placeholder="請輸入文章內容..." name="content" value={this.state.content} />
                    <br /><textarea className="img-block" type="text" onChange={e => this.setState({ img_source: e.target.value })} placeholder="圖片連結" name="img_source" value={this.state.img_source} />
                </div>
                <div className="post-article_button-container">
                    <div className="post-article_button-subcontainer"><button className="post-article_button" onClick={this.newPost}><b>確認</b></button></div>
                    <div className="post-article_button-subcontainer"><button className="post-article_button" onClick={this.clear}><b>清空</b></button></div>
                    <div className="post-article_button-subcontainer"><button className="post-article_button" onClick={this.goBack}><b>返回</b></button></div>
                </div>
            </div>
        );
    }
}
