import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Articles extends Component {
    componentDidMount() {
        // this.wait()
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
        fetch('http://localhost:3001/getArticle')
        .then(res => console.log(res.data))
        .catch((err) => console.error(err));
    }

    // newPost = () => {
    //     let data = { title: '01', author: 'Peter', time: '2019/5/8', content: 'This is article 1.', img_source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shiba_Inu.jpg/220px-Shiba_Inu.jpg' };
    //     socket.emit('new_post', data);
    // }

    // wait = async () => {
    //     socket.on('post_back', msg => {
    //         console.log(msg);
    //     })
    // }

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
                <button className="newPostButton" onClick={this.newPost}>Post</button>
                {list}
            </div>
        );
    }
}
