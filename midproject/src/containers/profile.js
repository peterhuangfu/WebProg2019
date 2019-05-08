import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-title"><b>個人檔案</b></div>
                <hr />
                <div className="profile-container">
                    <img src="https://pic3.zhimg.com/v2-6286831c2f8f9d17e5e20c10db22dea9_1200x500.jpg" alt="" className="profile-img"></img>
                    <div className="profile-text"><span>Hi, there. This is my profile introduction.</span></div>
                </div>
            </div>
        );
    }
}
