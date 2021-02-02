import {all} from 'redux-saga/effects';
import {watchFetchTodoAction} from './todo/fetchTodoAction';
import {watchToggleTodoAction} from './todo/toggleTodoAction';
import {watchCreateTodoAction} from './todo/createTodoAction';
import {watchDeleteTodoAction} from './todo/deleteTodoAction';
import {watchGetTodoAction} from './todo/getTodoByIdAction';
import {watchEditTodoAction} from './todo/editTodoAction';

export default function* rootSaga() {
  yield all([
    watchFetchTodoAction(),
    watchToggleTodoAction(),
    watchCreateTodoAction(),
    watchDeleteTodoAction(),
    watchGetTodoAction(),
    watchEditTodoAction(),
  ]);
}
