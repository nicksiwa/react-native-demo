import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {toggleTodo} from '../../../services';

const toggleTodoPendingAction = () => ({
  type: TODO.TOGGLE_TODO_PENDING,
});

const toggleTodoSuccessAction = (data) => ({
  type: TODO.TOGGLE_TODO_SUCCESS,
  id: data.id,
  payload: data.completed,
});

const toggleTodoFailedAction = (err) => ({
  type: TODO.FETCH_TODO_FAILED,
  error: err,
});

function* toggleTodoAction(action) {
  try {
    yield put(toggleTodoPendingAction());
    const res = yield toggleTodo(action.id, action.isChecked);
    yield put(toggleTodoSuccessAction(res.data));
  } catch (err) {
    yield put(toggleTodoFailedAction(err));
  }
}

export function* watchToggleTodoAction() {
  yield takeEvery(TODO.TOGGLE_TODO_REQUEST, toggleTodoAction);
}
