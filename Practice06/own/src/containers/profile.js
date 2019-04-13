import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-title"><b>個人檔案</b></div>
                <hr />
                <div className="profile-container">
                    <img src="http://www.animationsensations.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/_/w.ich_icon.jpg" className="profile-img"></img>
                    <div className="profile-text"><span>Hi, there. This is my profile introduction.</span></div>
                </div>
            </div>
        );
    }
}
