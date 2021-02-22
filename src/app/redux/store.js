import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import watcherSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store =  configureStore({
  reducer: rootReducer,
  middleware: [ ...getDefaultMiddleware({ thunk: false}), sagaMiddleware]
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

sagaMiddleware.run(watcherSaga);


export default store