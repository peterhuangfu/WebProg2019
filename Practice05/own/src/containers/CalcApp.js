import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: '0', cal: '' };
    this.notFirst = false;
    this.previous = '0';
  }

  resetState = () => {
    this.setState(() => ({ num: '0' }));
    this.setState(() => ({ cal: '' }));
    this.notFirst = false;
  }

  calcu = (num) => {
    if(isNaN(parseFloat(num))) { // 運算符號
      if(isNaN(parseFloat(this.previous))) { // 重複運算符號
        if(this.previous === '=') this.setState(state => ({ cal: state.cal.substr(0, state.cal.length) }));
        else this.setState(state => ({ cal: state.cal.substr(0, state.cal.length-1) }));

        if(num !== '=') this.setState(state => ({ cal: state.cal.concat(num) }));
        // setTimeout(() => console.log(this.state.cal), 50);
        this.previous = num;
      }
      else { // 運算
        let num1 = ''; let num2 = ''; let log = ''; let ans;
        for(let i = 0; i < this.state.cal.length; i++) {
          if(isNaN(parseFloat(this.state.cal[i])) && this.state.cal[i] !== '.') {
            log = this.state.cal[i];
            num1 = this.state.cal.substr(0,i);
            num2 = this.state.cal.substr(i+1, this.state.cal.length-1-i);
            break;
          }
        }
        if(log === '+') ans = parseFloat(num1) + parseFloat(num2);
        else if(log === '-') ans = parseFloat(num1) - parseFloat(num2);
        else if(log === 'x') ans = parseFloat(num1) * parseFloat(num2);
        else if(log === '÷') ans = parseFloat(num1) / parseFloat(num2);
        
        if(log !== '') {
          this.setState(() => ({ cal: ans.toString() }));
          this.setState(() => ({ num: ans.toString() }));
        }
        if(num !== '=') this.setState(state => ({ cal: state.cal.concat(num) }));
        this.previous = num;
      }
    }
    else { // 數字 -> 累積
      if(this.num === '=') this.setState(() => ({ cal: '' }));
      if(this.num !== '=') {
        this.setState(state => ({ cal: state.cal.concat(num) }));
        if(isNaN(parseFloat(this.previous))) this.setState(() => ({ num: '' }));
        if(this.notFirst === false) {
          this.setState(() => ({ num: num }));
          this.notFirst = true;
        }
        else this.setState(state => ({ num: state.num.concat(num) }));
      }
      this.previous = num;
    }
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
