import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {getTodoById} from '../../../services';

const getTodoByIdActionPending = () => ({
  type: TODO.GET_TODO_BY_ID_PENDING,
});

const getTodoByIdActionSuccess = (data) => ({
  type: TODO.GET_TODO_BY_ID_SUCCESS,
  payload: data,
});

const getTodoByIdActionFailed = (err) => ({
  type: TODO.GET_TODO_BY_ID_FAILED,
  error: err,
});

function* getTogoByIdAction(action) {
  try {
    yield put(getTodoByIdActionPending());
    const res = yield getTodoById(action.id);
    yield put(getTodoByIdActionSuccess(res.data));
  } catch (err) {
    yield put(getTodoByIdActionFailed(err));
  }
}

export function* watchGetTodoAction() {
  yield takeEvery(TODO.GET_TODO_BY_ID_REQUEST, getTogoByIdAction);
}
