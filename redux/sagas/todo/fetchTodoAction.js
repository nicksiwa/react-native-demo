import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {getTodos} from '../../../services';

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

function* fetchTodoAction() {
  try {
    yield put(fetchTodoPendingAction());
    const res = yield getTodos();
    yield put(fetchTodoSuccessAction(res.data));
  } catch (err) {
    yield put(fetchTodoFailedAction(err));
  }
}

export function* watchFetchTodoAction() {
  yield takeEvery(TODO.FETCH_TODO_REQUEST, fetchTodoAction);
}
