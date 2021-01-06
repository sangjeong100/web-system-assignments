import {React, Component } from "react";
import { connect } from 'react-redux';

class Form extends Component{
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }
  
  onChangeTextHandler = (e) =>{
    this.setState({
      text: e.target.value
    });
  };

  createTodo = (e) => {
    e.preventDefault();
    this.setState({
      text: ''
    });
    this.props.handleCreateTodo(this.state.text);
  }
  
  render(){


    return(
      <div>
        <input type='text' onChange={this.onChangeTextHandler} value={this.state.text} />
        <button type='submit' onClick={this.createTodo}>ok</button>
      </div>
    );

  }
}

export default Form;