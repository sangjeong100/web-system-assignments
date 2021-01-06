import { React, Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import List from "./List";

import * as actions from '../actions/todo';

class TodoList extends Component {
    
  render(){
    const { todoList, createTodo } = this.props;
    

    return (
      <div>
        <h2>TodoList</h2>
        <span>Total:{todoList.length} Done:{todoList.filter((element) => element.done===true).length}</span>
        <Form handleCreateTodo={(text) => createTodo(text)}/>
        <List/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo
  };
}

const mapDispatchToProps = (dispatch) => ({
  createTodo: (id) => dispatch(actions.createTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);

