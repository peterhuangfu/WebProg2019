import React, { Component } from "react";
import Article from "../components/article";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './article_detail.css';

const article_id = [];

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        for(let i = 0; i < 100; i++) {
            article_id.push(i.toString());
        }
        this.state = { id: '', author: '', title: '', content: '', img_source: '', time: '', open: false, password: '', index: 0 };
    }

    componentDidMount() {
        window.scrollTo(0,0);
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
        window.scrollTo(0,0);
    }

    deleteArticle = async () => {
        const { id } = this.props.match.params;
        let trans = { id: id };
        await fetch('http://localhost:3001/api/deleteArticle', {
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
        this.props.history.push('/articles');
    }

    handleClickOpen = () => {
        this.setState({ open: true, index: 1 });
    };

    handleClickOpenDel = () => {
        this.setState({ open: true, index: 2 });
    };
    
    handleClose = () => {
        this.setState({ open: false, index: 0 });
    };

    checkPass = async () => {
        const { id } = this.props.match.params;
        if(this.state.index === 1) {
            await fetch('http://localhost:3001/api/getPassword')
            .then(res => { return res.json() })
            .then(res => {
                if(res.success) {
                    if(this.state.password === res.data[0].password)
                        this.props.history.push('/updateArticle/' + id);
                    else
                        alert('Wrong Password.');
                }
                else
                    alert('Wrong Password.');
            })
            .catch((err) => console.error(err));
        }
        else if(this.state.index === 2)
            this.deleteArticle();
        this.setState({ password: '' });
    }

    passInput = e => {
        if(e.key === 'Enter') 
            this.checkPass();
        else
            this.setState({ password: e.target.value });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { id } = this.props.match.params;
        return id && article_id.includes(id) ? (
            <div>
                <div className="article-itself">
                    <Article id={id} title={this.state.title} source={this.state.img_source} author={this.state.author} content={this.state.content} time={this.state.time} />
                </div>
                <div className="article-detail_button-container">
                    <div className="article-detail_button-subcontainer"><button className="newPostButton" onClick={this.handleClickOpen}><b>編輯</b></button></div>
                    <div className="article-detail_button-subcontainer"><button className="article-detail_button" onClick={this.handleClickOpenDel}><b>刪除</b></button></div>
                    <div className="article-detail_button-subcontainer"><button className="article-detail_button" onClick={this.goBack}><b>返回</b></button></div>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">輸入密碼</DialogTitle>
                    <DialogContent>
                        <DialogContentText>請輸入密碼</DialogContentText>
                        <TextField autoFocus margin="dense" id="post_verify_password" type="password" fullWidth onKeyUp={this.passInput}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">取消</Button>
                        <Button onClick={this.checkPass} color="primary">確認</Button>
                    </DialogActions>
                </Dialog>
            </div>
        ) : (
            <div>
                <h3>Article No.{id} NOT FOUND</h3>
            </div>
        );
    }
}
