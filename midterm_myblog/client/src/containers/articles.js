import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { id: [] , data: []};
    }
    componentDidMount() {
        this.getArticleID();
        window.scrollTo(0,0);
    }

    getArticleID = async () => {
        await fetch('http://localhost:3001/api/getArticle')
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success)
                this.setState(() => ({ data: originData.data }));
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));

        let idList = [];
        for(let i = 0; i < this.state.data.length; i++) {
            idList.push(parseInt(this.state.data[i].id));
        }
        this.sortById(idList);
    }

    sortById = (idList) => {
        idList.sort(function(a, b) { return a - b ; });
        for(let i = 0; i < idList.length; i++) {
            idList[i] = idList[i].toString();
        }
        this.setState(() => ({ id: idList }));
    }

    render() {
        const style = { float: 'right' };
        const list = this.state.data.map((e, i) => (
            <div key={i} className="article-item">
                <span>&nbsp;&nbsp;</span><NavLink className="nav_a" to={"/articles/" + e.id}><b>【{e.title}】</b></NavLink>
                <span style={style}>{e.time}</span>
            </div>
        ));
        return (
            <div>
                {/* <h2 style={style}> &nbsp; &nbsp; -------------------- 文章列表 --------------------</h2> */}
                <button className="newPostButton"><NavLink className="link" to="/postArticle"><b>發文</b></NavLink></button>
                <div className="article-list-container">{list}</div>
            </div>
        );
    }
}
