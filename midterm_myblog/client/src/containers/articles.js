import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export default class Articles extends Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/getArticle')
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
        const list = article_id.map((e, i) => (
            <div key={i}>
                <span>&nbsp;&nbsp;</span><NavLink className="nav_a" to={"/articles/" + e}>Article No.{e}</NavLink>
            </div>
        ));
        const style = { textAlign: 'center', color: 'rgb(1, 107, 163)' };
        return (
            <div>
                <h2 style={style}> &nbsp; &nbsp; -------------------- 文章列表 --------------------</h2>
                <button className="newPostButton"><NavLink to="/postArticle">新增</NavLink></button>
                {list}
            </div>
        );
    }
}
