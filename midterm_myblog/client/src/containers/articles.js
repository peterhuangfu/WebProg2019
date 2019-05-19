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
        this.state = { data: [], open: false, password: '' };
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

    checkPass = async () => {
        await fetch('http://localhost:3001/api/getPassword')
        .then(res => { return res.json() })
        .then(res => {
            if(res.success) {
                if(this.state.password === res.data[0].password)
                    this.props.history.push('/postArticle');
                else
                    alert('Wrong Password.');
            }
            else
                alert('Wrong Password.');
        })
        .catch((err) => console.error(err));
        this.setState({ password: '' });
    }

    passInput = e => {
        if(e.key === 'Enter') 
            this.checkPass();
        else
            this.setState({ password: e.target.value });
    }

    render() {
        const style = { float: 'right', color: '#ffffff' };
        const list = this.state.data.map((e, i) => (
            <div key={i} className="article-item">
                <span>&nbsp;&nbsp;</span><NavLink className="nav_a" to={"/articles/" + e.id}><b>【{e.title}】</b></NavLink>
                <span style={style}>最後編輯：{e.time}</span>
            </div>
        ));
        return (
            <div>
                <button className="newPostButton" onClick={this.handleClickOpen}><b>發文</b></button>
                <div className="article-list-container">{list}</div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">輸入密碼</DialogTitle>
                    <DialogContent>
                        <DialogContentText>請輸入密碼</DialogContentText>
                        <TextField autoFocus margin="dense" id="post_verify_password" type="password" fullWidth onKeyUp={this.passInput} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">取消</Button>
                        <Button onClick={this.checkPass} color="primary">確認</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
