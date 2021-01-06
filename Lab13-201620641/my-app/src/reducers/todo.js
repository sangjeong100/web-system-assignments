import * as todoActions from '../actions/todo';



const todo = ( state = [], action) => {
  const { type } = action;
  switch (type) {
    case todoActions.CREATE_TODO: {
      return [
        ...state,
        { id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case todoActions.DELETE_TODO: {
      const nextState = state.filter((todo) => todo.text !== action.text);
      return nextState;
    }
    case todoActions.TOGGLE_TODO: {
      return state.map( (todo) =>{
        if(todo.id === action.id) {
          return { ...todo, done: !todo.done};
        } 
        else return todo;
      } )
    }
    default: return state;
  }
}

export default todo;