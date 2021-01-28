import {all} from 'redux-saga/effects';
import {watchFetchTodoAction} from './todoAction';

export default function* rootSaga() {
  yield all([watchFetchTodoAction()]);
}
