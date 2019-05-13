import React, { Component } from "react";

export default class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '', img_source: '' };
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/getProfile')
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success) {
                this.setState(() => ({ id: originData.data[0].id, content: originData.data[0].content, img_source: originData.data[0].img_source }));
            }
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
    }

    update = async () => {
        let data = { id: '0', update: { content: this.state.content, img_source: this.state.img_source } };
        await fetch('http://localhost:3001/api/updateProfile', {
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
        this.setState(() => ({ content: '', img_source: '' }));
    }

    render() {
        return (
            <div className="profile">
                <div className="profile-title"><b>修改個人檔案</b></div>
                <input type="text" onChange={e => this.setState({ content: e.target.value })} placeholder="內容" name="content" value={this.state.content}/>
                <input type="text" onChange={e => this.setState({ img_source: e.target.value })} placeholder="圖片連結" name="img_source" value={this.state.img_source}/>
                <button className="confirm_button" onClick={this.update}>確認</button>
                <button className="confirm_button" onClick={this.clear}>清空</button>
            </div>
        );
    }
}
