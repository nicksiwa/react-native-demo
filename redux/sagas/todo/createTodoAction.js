import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {postTodo} from '../../../services';

const createTodoActionPending = () => ({
  type: TODO.CRAETE_TODO_PENDING,
});

const createTodoActionSuccess = (data) => ({
  type: TODO.CREATE_TODO_SUCCESS,
  payload: data,
});

const createTodoActionFailed = (err) => ({
  type: TODO.CREATE_TODO_FAILED,
  error: err,
});

function* createTodoAction(action) {
  try {
    yield put(createTodoActionPending());
    const res = yield postTodo(action.payload);
    yield put(createTodoActionSuccess(res.data));
  } catch (err) {
    yield put(createTodoActionFailed(err));
  }
}

export function* watchCreateTodoAction() {
  yield takeEvery(TODO.CREATE_TODO_REQUEST, createTodoAction);
}
