import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Profile extends Component {
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

    render() {
        return (
            <div className="profile">
                <div className="profile-title"><b>個人檔案</b></div>
                <button className="newPostButton"><NavLink className="link" to="/updateProfile">編輯</NavLink></button>
                <hr />
                <div className="profile-container">
                    <img src={this.state.img_source} alt="" className="profile-img"></img>
                    <div className="profile-text"><span>{this.state.content}</span></div>
                </div>
            </div>
        );
    }
}
