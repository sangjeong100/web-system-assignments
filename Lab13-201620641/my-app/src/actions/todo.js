export const CREATE_TODO = 'todo/CREATE_TODO';
export const DELETE_TODO = 'todo/DELETE_TODO';
export const TOGGLE_TODO = 'todo/TOGGLE_TODO';

let todoID = 0;

export const createTodo = (text) =>{
  return {
    type: CREATE_TODO,
    id: todoID++,
    text
  }
};

export const deleteTodo = (text) =>{
  return {
    type: DELETE_TODO,
    text
  }
};

export const toggleTodo = (id) =>{
  return {
    type: TOGGLE_TODO,
    id
  }
}