import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], open: false };
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
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

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
                <button className="newPostButton" onClick={this.handleClickOpen}><b>發文</b></button>
                {/* <NavLink to="/postArticle"></NavLink> */}
                <div className="article-list-container">{list}</div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">輸入密碼</DialogTitle>
                    <DialogContent>
                        <DialogContentText>請輸入密碼</DialogContentText>
                        <TextField autoFocus margin="dense" id="post_verify_password" label="Post_Password" type="password" fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">取消</Button>
                        <Button onClick={this.handleClose} color="primary">確認</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
