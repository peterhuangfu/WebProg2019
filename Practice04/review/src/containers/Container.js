import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Input from '../components/Input.js'


var Item_array = [];
var Item_isComplete_array = [];

class Left extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={this.props.className} id={this.props.id}>{this.props.num} left</div>
        )
    }
}

class LI extends React.Component{
    render(){
        return Item_array;
    }
}

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {id : this.props.id};
    }

    render(){
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input id={this.state.id}  type='checkbox' onClick={this.props.onClick_C}></input>
                    <label htmlFor={this.state.id}></label>
                </div>
        
                <h1 className="todo-app__item-detail">
                    {this.props.text}
                </h1>
        
                 <img src="./img/x.png" className="todo-app__item-x" id={this.state.id} onClick={this.props.onClick_D}></img>
             </li> 
        )
    }
}

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {Left_number : 0,Item_number : 0,Lefttodo : 0,input_text:''};
    }

    handleCheck = event => {
        if(Item_isComplete_array[event.target.id]==="false"){
            Item_isComplete_array[event.target.id] = "true";
        }
        else {
            Item_isComplete_array[event.target.id] = "false";
        }
        this.setState({Lefttodo : Item_isComplete_array.filter(ele => ele==="false").length});
  
            

    }

    handleDelete = event => {
        Item_array.splice(event.target.id,1);
        Item_isComplete_array.splice(event.target.id,1);
        ReactDOM.render(<LI />, document.getElementById('todo-list'));
        this.setState(state => ({Item_number : state.Item_number-1}));
        this.setState(state => ({Lefttodo : Item_isComplete_array.filter(ele => ele==="false").length}));
        


    }
   
   
    handleInput = event => {
        if(event.keyCode === 13 && event.target.value !== ''){
            Item_array[this.state.Item_number] = <Item id={this.state.Item_number} text={event.target.value} onClick_D={this.handleDelete} onClick_C={this.handleCheck}/>;
            Item_isComplete_array[this.state.Item_number] = "false";
            this.setState(state => ({Item_number : state.Item_number+1}));
            this.setState(state => ({Lefttodo : state.Lefttodo+1}));
            event.target.value = '';
            ReactDOM.render(<LI />, document.getElementById('todo-list'));
  
        
        }
        
   }

    render(){   
        return(
            <div id="root" className="todo-app__root">
                <header className="todo-app__header">
                    <h1 className="todo-app__title">todos</h1>
                </header>

                <section className="todo-app__main">
                    <Input id="todo-input" type="text" className="todo-app__input" placeholder="What needs to be done" onKeyUp={this.handleInput} input_text={this.state.input_text}/>
                    <ul className="todo-app__list" id="todo-list" ></ul>
                </section>

                <footer className="todo-app__footer" id="todo-footer">
                    <Left className="todo-app__total" id="todo-count" num={this.state.Lefttodo}/>
                        <ul className="todo-app__view-buttons">
                            <li id="All_button">All</li>
                            <li id="Active_button">Active</li>
                            <li id="Complete_button">Complete</li>
                        </ul>
                    <div className="todo-app__clean disabled">clear complete</div>    
                    
                </footer>
         
            </div>
        )
    }

}

export default Container;