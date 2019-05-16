import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '', content: '', img_source: '', open: false, password: '' };
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/getProfile')
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success) {
                this.setState(() => ({ id: originData.data[0].id, content: originData.data[0].content, img_source: originData.data[0].img_source }));
            }
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
        window.scrollTo(0,0);
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
                    this.props.history.push('/updateProfile');
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
        return (
            <div className="profile">
                <div className="profile-title">
                    <b>個人檔案</b>
                    <button className="newPostButton" onClick={this.handleClickOpen}><b>編輯</b></button>
                </div>
                <hr />
                <div className="profile-container">
                    <img src={this.state.img_source} alt="" className="profile-img"></img>
                    <div className="profile-text">{this.state.content.split('\n').map(item => { return <span>{item}<br /></span> } )}</div>
                </div>
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
