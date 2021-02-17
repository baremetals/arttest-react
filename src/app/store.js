import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false}).concat(sagaMiddleware)
  },
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

sagaMiddleware.run(rootSaga);

export const AppDispatch = store.dispatch

export default store