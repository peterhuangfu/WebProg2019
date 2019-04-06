import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: '0', cal: '', extra: '' };
    this.notFirst = false;
    this.previous = '0';
    this.ago = '0';
  }

  resetState = () => {
    this.setState(() => ({ num: '0' }));
    this.setState(() => ({ cal: '' }));
    this.setState(() => ({ extra: '' }));
    this.notFirst = false;
    this.previous = '0';
    this.ago = '0';
  }

  calcu = (num) => {
    let ans;
    if(isNaN(parseFloat(num))) { // 運算符號
      if(isNaN(parseFloat(this.previous))) { // 重複運算符號
        if(this.previous === '=') {
          if(num === '=') {
            ans = this.count(parseFloat(this.state.cal), parseFloat(this.state.extra.substr(1, this.state.extra.length-1)), this.state.extra[0]);
            this.setState(() => ({ num: ans.toString() }));
            this.setState(() => ({ cal: ans.toString() }));
          }
          else 
            this.setState(state => ({ cal: state.cal.substr(0, state.cal.length) }));
        }
        else this.setState(state => ({ cal: state.cal.substr(0, state.cal.length-1) }));

        if(num !== '=') this.setState(state => ({ cal: state.cal.concat(num) }));
        // setTimeout(() => console.log(this.state.cal), 50);
        if(isNaN(parseInt(this.previous)) !== isNaN(parseInt(num)) || this.ago !== '=') this.ago = this.previous;
        this.previous = num;
      }
      else { // 運算
        let num1 = ''; let num2 = ''; let log = ''; let ans;
        if(num === '=' && this.ago === '=') {
          if(this.state.cal[0] === '-') {
            num1 = parseFloat(this.state.cal.substr(1, this.state.cal.length-1));
            num1 *= (-1);
          }
          else num1 = parseFloat(this.state.cal);
          ans = this.count(num1, parseFloat(this.state.extra.substr(1, this.state.extra.length-1)), this.state.extra[0]);
          this.setState(() => ({ num: ans.toString() }));
          this.setState(() => ({ cal: ans.toString() }));
        }
        else {
          for(let i = 0; i < this.state.cal.length; i++) {
            if(isNaN(parseFloat(this.state.cal[i])) && this.state.cal[i] !== '.') {
              if(i === 0) continue;
              else {
                if(isNaN(parseFloat(this.state.cal[0]))) {
                  num1 = this.state.cal.substr(1, i-1);
                  num1 *= (-1);
                }
                else num1 = this.state.cal.substr(0, i);
              }
              log = this.state.cal[i];
              num2 = this.state.cal.substr(i+1, this.state.cal.length-1-i);
              break;
            }
          }
          ans = this.count(parseFloat(num1), parseFloat(num2), log)
          
          if(log !== '') {
            this.setState(() => ({ cal: ans.toString() }));
            this.setState(() => ({ num: ans.toString() }));
            this.setState(() => ({ extra: log + num2 }));
          }
        }

        if(num !== '=') {
          if(this.previous !== '=') this.setState(state => ({ cal: state.cal.concat(num) }));
        }

        if(isNaN(parseInt(this.previous)) !== isNaN(parseInt(num)) || this.ago !== '=') this.ago = this.previous;
        this.previous = num;
        // setTimeout(() => console.log(this.state.cal), 50);
      }
    }
    else { // 數字 -> 累積
      if(this.previous === '=') this.setState(() => ({ cal: num }));
      else this.setState(state => ({ cal: state.cal.concat(num) }));

      if(isNaN(parseFloat(this.previous))) this.setState(() => ({ num: '' }));
      if(this.notFirst === false) {
        this.setState(() => ({ num: num }));
        this.notFirst = true;
      }
      else this.setState(state => ({ num: state.num.concat(num) }));
      
      if(isNaN(parseInt(this.previous)) !== isNaN(parseInt(num)) || this.ago !== '=') this.ago = this.previous;
      this.previous = num;
      // setTimeout(() => console.log(this.state.cal), 50);
    }
  }

  count = (num1, num2, log) => {
    let ans;
    if(log === '+') ans = num1 + num2;
    else if(log === '-') ans = num1 - num2;
    else if(log === 'x') ans = num1 * num2;
    else if(log === '÷') ans = num1 / num2;
    return ans;
  }

  showNotImplemented = () => {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.num}</div>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-operator2" onClick={this.resetState} children="AC"></CalcButton>
            <CalcButton className="calc-operator2" onClick={this.showNotImplemented} children="+/-"></CalcButton>
            <CalcButton className="calc-operator2" onClick={this.showNotImplemented} children="%"></CalcButton>
            <CalcButton className="calc-operator"  onClick={this.calcu} children="÷"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.calcu} children="7"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="8"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="9"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.calcu} children="x"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.calcu} children="4"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="5"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="6"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.calcu} children="-"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.calcu} children="1"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="2"></CalcButton>
            <CalcButton className="calc-number" onClick={this.calcu} children="3"></CalcButton>
            <CalcButton className="calc-operator" onClick={this.calcu} children="+"></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.calcu} children="0"></CalcButton>
            <CalcButton className="calc-number" onClick={this.showNotImplemented} children="."></CalcButton>
            <CalcButton className="calc-operator" onClick={this.calcu} children="="></CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
