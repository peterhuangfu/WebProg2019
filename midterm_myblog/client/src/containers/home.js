import React, { Component } from "react";

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const style = { width: '80%', height: '80%', marginLeft: '10%', marginTop: '1em' };
        return (
            <div>
                <img src="http://i.imgur.com/BaYzf.jpg" alt="" style={style} />
                <img src="http://i.imgur.com/7rYdt.jpg" alt="" style={style} />
                <img src="http://i.imgur.com/oDl6j.jpg" alt="" style={style} />
                <img src="http://i.imgur.com/Dqef6.jpg" alt="" style={style} />
            </div>
        );
    }
}
