import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingOperator: null,
      pendingA: null,
      pendingB: null,
      display: 0
    };
    this.operator = {
      '+': (a, b) => (a + b),
      '-': (a, b) => (a - b),
      '×': (a, b) => (a * b),
      '÷': (a, b) => (a / b), 
    }
  }

  resetState = () => {
    this.setState((state) => ({
      pendingOperator: null,
      pendingA: null,
      pendingB: null,
      display: 0
    }))
  }

  showNotImplemented = () =>  {
    console.warn('This function is not implemented yet.');
  }

  clickNumber = (number) => {
    if (this.state.pendingA === null) {
      this.setState((state) => ({
        pendingA: Number(number), 
        display: Number(number)
      }))
    }
    else if (this.state.pendingOperator === null) {
      this.setState((state) => ({
        pendingA: state.pendingA * 10 + Number(number),
        display: state.pendingA * 10 + Number(number)
      }))
    }
    else if(this.state.pendingB === null){
      this.setState((state) => ({
        pendingB: Number(number),
        display: state.pendingA + state.pendingOperator + Number(number)
      }))
    }
    else if (this.state.pendingB !== null) {
      this.setState((state) => ({
        pendingB: state.pendingB * 10 + Number(number),
        display: state.pendingA + state.pendingOperator + (state.pendingB * 10 + Number(number)).toString()
      }))
      console.log(this.state)
    }
  }

  clickOperator = (operator) => {
    // only when there is a input number beforehand, the operator should be stored
    if (this.state.pendingA !== null) {
      // With b pended in, pressing any operator will update the output
      if (this.state.pendingB !== null) {
        this.setState((state) => ({
          pendingA: this.operator[state.pendingOperator](state.pendingA, state.pendingB),
          pendingB: null,
          pendingOperator: null,
          display: this.operator[state.pendingOperator](state.pendingA, state.pendingB)
        }))
      } else {
        // automatically replace the previous one
        this.setState((state) => ({
          pendingOperator: operator,
          display: state.pendingA + operator
        }))
      }   
    }
  }
  
  clickEqual = (operator) => {
    console.log(this.state)
    if (this.state.pendingA !== null) {
      if (this.state.pendingB !== null) {
        this.setState((state) => ({
          pendingA: this.operator[state.pendingOperator](state.pendingA, state.pendingB),
          pendingB: null,
          pendingOperator: null,
          display: this.operator[state.pendingOperator](state.pendingA, state.pendingB)
        }))
      } else {
        this.setState((state) => ({
          pendingOperator: null,
          display: state.pendingA,
        }))
      }
    }
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.clickOperator}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.clickNumber}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.clickOperator}>×</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.clickNumber}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.clickOperator}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.clickNumber}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.clickOperator}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="bigger-btn" onClick={this.clickNumber}>0</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.clickEqual}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
