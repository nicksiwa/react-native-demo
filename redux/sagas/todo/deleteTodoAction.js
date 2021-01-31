import {takeEvery, put} from 'redux-saga/effects';
import {TODO} from '../../actionTypes';
import {deleteTodo} from '../../../services';

const deleteTodoPendingAction = () => ({
  type: TODO.DELETE_TODO_PENDING,
});

const deleteTodoSuccessAction = (id) => ({
  type: TODO.DELETE_TODO_SUCCESS,
  id: id,
});

const deleteTodoFailedAction = (err) => ({
  type: TODO.DELETE_TODO_FAILED,
  error: err,
});

function* deleteTodoAction(action) {
  try {
    yield put(deleteTodoPendingAction());
    yield deleteTodo(action.id);
    yield put(deleteTodoSuccessAction(action.id));
  } catch (err) {
    yield put(deleteTodoFailedAction(err));
  }
}

export function* watchDeleteTodoAction() {
  yield takeEvery(TODO.DELETE_TODO_REQUEST, deleteTodoAction);
}
