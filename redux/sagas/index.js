import {all} from 'redux-saga/effects';
import {watchFetchTodoAction} from './todo/fetchTodoAction';
import {watchToggleTodoAction} from './todo/toggleTodoAction';

export default function* rootSaga() {
  yield all([watchFetchTodoAction(), watchToggleTodoAction()]);
}
