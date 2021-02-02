import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {updateTodo} from '../../../services';

const editTodoActionPending = () => ({
  type: TODO.EDIT_TODO_PENDING,
});

const editTodoActionSuccess = (data) => ({
  type: TODO.EDIT_TODO_SUCCESS,
  id: data.id,
  payload: data,
});

const editTodoActionFailed = (err) => ({
  type: TODO.EDIT_TODO_FAILED,
  error: err,
});

function* editTodoAction(action) {
  try {
    yield put(editTodoActionPending());
    const res = yield updateTodo(action.id, action.payload);
    yield put(editTodoActionSuccess(res.data));
  } catch (err) {
    yield put(editTodoActionFailed(err));
  }
}

export function* watchEditTodoAction() {
  yield takeEvery(TODO.EDIT_TODO_REQUEST, editTodoAction);
}
