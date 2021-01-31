import {all} from 'redux-saga/effects';
import {watchFetchTodoAction} from './todo/fetchTodoAction';
import {watchToggleTodoAction} from './todo/toggleTodoAction';
import {watchCreateTodoAction} from './todo/createTodoAction';
import {watchDeleteTodoAction} from './todo/deleteTodoAction';

export default function* rootSaga() {
  yield all([
    watchFetchTodoAction(),
    watchToggleTodoAction(),
    watchCreateTodoAction(),
    watchDeleteTodoAction(),
  ]);
}
