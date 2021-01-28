import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
