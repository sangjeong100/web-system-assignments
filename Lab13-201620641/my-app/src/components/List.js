import { React, Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/todo';

class List extends Component {

  render(){

    const { todoList, toggleTodo, deleteTodo} = this.props;
    return (
      <ul id="list">
        {todoList.map( (todo) => (
          todo.done === false ? 
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => toggleTodo(todo.id)}>완료</button>
              <button onClick={() => deleteTodo(todo.text)}>삭제</button>
            </li>
          :
            <li key={todo.id} style={{backgroundColor:"green"}}>
              <span>{todo.text}</span>
              <button onClick={() => toggleTodo(todo.id)}>완료</button>
              <button onClick={() => deleteTodo(todo.text)}>삭제</button>
            </li>
          
        ))
      }
    </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo
  };
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (text) => dispatch(actions.deleteTodo(text)),
  toggleTodo: (id) => dispatch(actions.toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);