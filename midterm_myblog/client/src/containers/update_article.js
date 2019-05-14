import React, { Component } from "react";

export default class UpdateArticle extends Component {
    constructor(props) {
        super(props);
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

    update = async () => {
        let today = new Date();
        await this.setState(() => ({ time: today.getFullYear().toString()+'-'+(today.getMonth()+1).toString()+'-'+today.getDate().toString() }));
        let data = { id: this.state.id, update: { title: this.state.title, author: this.state.author, time: this.state.time, content: this.state.content, img_source: this.state.img_source } };
        await fetch('http://localhost:3001/api/updateArticle', {
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
        this.setState(() => ({ id: '', author: '', title: '', content: '', img_source: '', time: '' }));
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="article">
                <div className="article-title"><b>{"修改文章"+this.state.id}</b></div>
                <div>
                    <input type="text" placeholder="ID" name="id" value={this.state.id} disabled={true}/>
                    <input type="text" onChange={e => this.setState({ title: e.target.value })} placeholder="標題" name="topic" value={this.state.title}/>
                    <input type="text" onChange={e => this.setState({ author: e.target.value })} placeholder="Author" name="author" value={this.state.author}/>
                    <input type="text" onChange={e => this.setState({ content: e.target.value })} placeholder="內容" name="content" value={this.state.content}/>
                    <input type="text" onChange={e => this.setState({ img_source: e.target.value })} placeholder="圖片連結" name="img_source" value={this.state.img_source}/>
                    <button className="confirm_button" onClick={this.goBack}>返回</button>
                    <button className="confirm_button" onClick={this.clear}>清空</button>
                    <button className="confirm_button" onClick={this.update}>確認</button>
                </div>
            </div>
        );
    }
}
