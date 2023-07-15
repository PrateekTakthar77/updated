import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
// sagaMiddleware.run(rootSaga);r
export default store;
