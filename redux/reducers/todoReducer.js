import {TODO} from '../actionTypes';

const initialState = {
  todos: [],
  currentTodo: null,
  isLoading: false,
  isError: false,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO.FETCH_TODO_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case TODO.FETCH_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TODO.FETCH_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TODO.CRAETE_TODO_PENDING:
      return {
        ...state,
      };
    case TODO.CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO.CREATE_TODO_FAILED:
      return {
        ...state,
        isError: true,
      };
    case TODO.TOGGLE_TODO_SUCCESS:
      const toggleIndex = state.todos.findIndex(
        (todo) => todo.id === action.id,
      );
      const toggleArray = [...state.todos];
      toggleArray[toggleIndex].completed = action.payload;

      return {
        ...state,
        todos: toggleArray,
      };
    case TODO.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TODO.GET_TODO_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case TODO.GET_TODO_BY_ID_SUCCESS:
      return {
        ...state,
        currentTodo: action.payload,
        isLoading: false,
      };
    case TODO.EDIT_TODO_SUCCESS:
      const editIndex = state.todos.findIndex((todo) => todo.id === action.id);
      const editArray = [...state.todos];
      editArray[editIndex] = action.payload;

      return {
        ...state,
        todos: editArray,
      };
    default:
      return state;
  }
}
