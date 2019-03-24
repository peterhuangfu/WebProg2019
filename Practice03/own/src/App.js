import React, { Component } from 'react';
import './App.css';

const img_src = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shiba_Inu.jpg/220px-Shiba_Inu.jpg',
  'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2015/11/22/20151122-071013_U589_M105080_1238.jpg?itok=QKIyfpwE',
  'https://s.newtalk.tw/album/news/86/59092bad70f8e.jpg'
]

const author = [
  'Peter',
  'Perry'
]

const descrip = [
  'Article 1 for shiba',
  'Article 2 for shiba',
  'Article 3 for shiba'
]

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header /> 
        <section>
          <Section />
        </section>
        <footer className="homepage-footer">
          copyright@ Behusky2245
        </footer>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const clear = {
      clear: 'both'
    }
    return (
      <div>
        <header>
          <div className="homepage-header">
            <div className="homepage-title"><h1>Static &nbsp;Blog</h1></div>
            <div className="homepage-nav">Logout</div>
            <div className="homepage-nav">Profile</div>
            <div className="homepage-nav">Article</div>
            <div style={clear}></div>
          </div>
        </header>
      </div>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <div className="homepage-section">
        <Article name="Article 1" source={img_src[0]} author={author[0]} descrip={descrip[0]}/>
        <Article name="Article 2" source={img_src[1]} author={author[0]} descrip={descrip[1]}/>
        <Article name="Article 3" source={img_src[2]} author={author[1]} descrip={descrip[2]}/>
      </div>
    );
  }
}

class Article extends Component {
  render() {
    const getTime = new Date();
    const time = {
      year: getTime.getFullYear().toString(),
      month: getTime.getMonth().toString(),
      day: getTime.getDate().toString(),
      hour: getTime.getHours().toString(),
      min: getTime.getMinutes().toString(),
      second: getTime.getSeconds().toString()
    };

    return (
      <div className="article">
        <div className="article-title"><b>{this.props.name}</b></div>
        <div>
          <span>Date : {time.year}/{time.month}/{time.day} &nbsp;{time.hour}:{time.min}:{time.second}
          <br /><br />
          Written By {this.props.author}</span>
        </div>
        <hr />
        <div className="article-main">
          <img src={this.props.source} className="article-img"></img>
          <div className="article-text"><span>{this.props.descrip}</span></div>
        </div>
      </div>
    );
  }
}

export default Homepage;
