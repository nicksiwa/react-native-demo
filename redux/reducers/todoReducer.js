import {TODO} from '../actionTypes';

const initialState = {
  todos: [],
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
    default:
      return state;
  }
}
