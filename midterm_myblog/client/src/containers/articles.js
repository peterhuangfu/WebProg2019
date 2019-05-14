import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { id: [] , data: []};
    }
    componentDidMount() {
        this.getArticleID();
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
        // const article_id = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const list = this.state.data.map((e, i) => (
            <div key={i}>
                <span>&nbsp;&nbsp;</span><NavLink className="nav_a" to={"/articles/" + e.id}>【{e.title}】</NavLink>
            </div>
        ));
        // const style = { textAlign: 'center', color: 'rgb(1, 107, 163)' };
        return (
            <div>
                {/* <h2 style={style}> &nbsp; &nbsp; -------------------- 文章列表 --------------------</h2> */}
                <button className="newPostButton"><NavLink className="link" to="/postArticle"><b>發文</b></NavLink></button>
                {list}
            </div>
        );
    }
}
