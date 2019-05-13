import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Article from "../components/article";

// const img_src = [
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shiba_Inu.jpg/220px-Shiba_Inu.jpg',
//     'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2015/11/22/20151122-071013_U589_M105080_1238.jpg?itok=QKIyfpwE',
//     'https://s.newtalk.tw/album/news/86/59092bad70f8e.jpg',
//     'https://media.oceanpark.com.hk/files/s3fs-public/Spotted%20Seal_1_0930.jpg',
//     'https://img5.cna.com.tw/www/WebPhotos/1024/20180807/62531956.jpg',
//     'https://hk.on.cc/tw/bkn/cnt/news/20171008/photo/bkntw-20171008050108762-1008_04011_001_01p.jpg?20171008050426',
//     'https://www.zhifure.com/upload/images/2018/6/22152610835.jpg',
//     'https://hk.on.cc/hk/bkn/cnt/aeanews/20181125/photo/bkn-20181125190245251-1125_00912_001_01p.jpg?20181126023445'
// ]

// const author = [
//     'Peter', 'Perry', 'Panda', 'Sheep', 'Jeter', 'Alex', 'Egwene', 'Arthur'
// ]

const article_id = [];

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        for(let i = 0; i < 100; i++) {
            article_id.push(i.toString());
        }
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

    deleteArticle = () => {
        const { id } = this.props.match.params;
        let trans = { id: id };
        fetch('http://localhost:3001/api/deleteArticle', {
            method: 'DELETE',
            body: JSON.stringify(trans),
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
    }

    render() {
        const { id } = this.props.match.params;
        return id && article_id.includes(id) ? (
            <div>
                <button className="confirm_button" onClick={this.deleteArticle}>刪除</button>
                <button className="newPostButton"><NavLink className="link" to={"/updateArticle/" + id}>修改</NavLink></button>
                <Article id={id} title={this.state.title} source={this.state.img_source} author={this.state.author} content={this.state.content} time={this.state.time} />
            </div>
        ) : (
            <div>
                <h3>Article No.{id} NOT FOUND</h3>
            </div>
        );
    }
}
