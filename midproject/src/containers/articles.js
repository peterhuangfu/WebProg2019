import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Articles extends Component {
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
                <h2 style={style}> &nbsp; &nbsp; --- Welcome to read articles ---</h2>
                {list}
            </div>
        );
    }
}
