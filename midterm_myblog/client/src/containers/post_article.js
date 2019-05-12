import React, { Component } from "react";

export default class DeleteArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '', author: '', title: '', content: '', img_source: '', time: '' };
    }

    newPost = async () => {
        let today = new Date();
        await this.setState(() => ({ time: today.getFullYear().toString()+'-'+(today.getMonth()+1).toString()+'-'+today.getDate().toString() }));
        let data = { id: this.state.id, title: this.state.title, author: this.state.author, time: this.state.time, content: this.state.content, img_source: this.state.img_source };
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
    }

    clear = () => {
        this.setState(() => ({ id: '', author: '', title: '', content: '', img_source: '', time: '' }));
    }

    render() {
        return (
            <div className="article">
                <div className="article-title"><b>新增文章</b></div>
                <div>
                    <input type="text" onChange={e => this.setState({ id: e.target.value })} placeholder="ID" name="id" value={this.state.id}/>
                    <input type="text" onChange={e => this.setState({ title: e.target.value })} placeholder="標題" name="topic" value={this.state.title}/>
                    <input type="text" onChange={e => this.setState({ author: e.target.value })} placeholder="Author" name="author" value={this.state.author}/>
                    <input type="text" onChange={e => this.setState({ content: e.target.value })} placeholder="內容" name="content" value={this.state.content}/>
                    <input type="text" onChange={e => this.setState({ img_source: e.target.value })} placeholder="圖片連結" name="img_source" value={this.state.img_source}/>
                    <button onClick={this.newPost}>確認</button>
                    <button onClick={this.clear}>清空</button>
                </div>
            </div>
        );
    }
}
