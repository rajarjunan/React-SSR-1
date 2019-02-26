import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducers';
// import rootSaga from './sagas';
import rootSaga from '../Sagas/appSaga'

export default function configureStore() {
//   const sagaMiddleware = createSagaMiddleware();
const sagaMiddleware = createSagaMiddleware();
const initialState = { data: 'store'  };
  const store = createStore(
    reducer, initialState, applyMiddleware(sagaMiddleware)
  );
  // console.log("-------------store", store.getState());
//   sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSaga);
  return store;
}