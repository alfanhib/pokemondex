/* eslint-disable import/no-cycle */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducer';

const middleware = [thunk];

if(__DEV__){
  const createDebugger = require("redux-flipper").default;
  middleware.push(createDebugger());
}

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  // applyMiddleware(thunk)
);
