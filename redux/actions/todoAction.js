import {TODO} from '../actionTypes';
import {getTodos, postTodo} from '../../services';

const fetchTodoPendingAction = () => ({
  type: TODO.FETCH_TODO_PENDING,
});

const fetchTodoSuccessAction = (todos) => ({
  type: TODO.FETCH_TODO_SUCCESS,
  payload: todos,
});

const fetchTodoFailedAction = (error) => ({
  type: TODO.FETCH_TODO_FAILED,
  error: error,
});

export const fetchTodo = () => async (dispatch) => {
  try {
    dispatch(fetchTodoPendingAction());
    const res = await getTodos();
    const todos = res.data;
    dispatch(fetchTodoSuccessAction(todos));
  } catch (err) {
    dispatch(fetchTodoFailedAction(err));
    console.error(err);
  }
};

const createTodoPendingAction = () => ({
  type: TODO.CRAETE_TODO_PENDING,
});

const createTodoSuccessAction = (todo) => ({
  type: TODO.CREATE_TODO_SUCCESS,
  payload: todo,
});

const createTodoFailedAction = (error) => ({
  type: TODO.CREATE_TODO_FAILED,
  error: error,
});

export const createTodo = (data) => async (dispatch) => {
  try {
    dispatch(createTodoPendingAction());
    const res = await postTodo(data);
    const todo = res.data;
    dispatch(createTodoSuccessAction(todo));
  } catch (err) {
    dispatch(createTodoFailedAction(err));
    console.error(err);
  }
};
