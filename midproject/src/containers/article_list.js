import React, { Component } from "react";
import Article from "../components/article";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");
const img_src = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shiba_Inu.jpg/220px-Shiba_Inu.jpg',
    'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2015/11/22/20151122-071013_U589_M105080_1238.jpg?itok=QKIyfpwE',
    'https://s.newtalk.tw/album/news/86/59092bad70f8e.jpg',
    'https://media.oceanpark.com.hk/files/s3fs-public/Spotted%20Seal_1_0930.jpg',
    'https://img5.cna.com.tw/www/WebPhotos/1024/20180807/62531956.jpg',
    'https://hk.on.cc/tw/bkn/cnt/news/20171008/photo/bkntw-20171008050108762-1008_04011_001_01p.jpg?20171008050426',
    'https://www.zhifure.com/upload/images/2018/6/22152610835.jpg',
    'https://hk.on.cc/hk/bkn/cnt/aeanews/20181125/photo/bkn-20181125190245251-1125_00912_001_01p.jpg?20181126023445'
]

const author = [
    'Peter', 'Perry', 'Panda', 'Sheep', 'Jeter', 'Alex', 'Egwene', 'Arthur'
]

export default class ArticleList extends Component {
    componentDidMount() {
    
        this.callApi()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        socket.emit('get_article', 'quest');
        socket.on('get_back', data => {
          console.log(data);
        });
        return ('Get Article.')
    }

    render() {
        const article_id = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const { id } = this.props.match.params;
        const descrip = 'This is Article No.'
        return id && article_id.includes(id) ? (
            <Article id={id} name={"Article No."+id} source={img_src[parseInt(id)-1]} author={author[parseInt(id)-1]} descrip={descrip+id+'.'}/>
        ) : (
            <div>
                <h3>Article No.{id} NOT FOUND</h3>
            </div>
        );
    }
}
