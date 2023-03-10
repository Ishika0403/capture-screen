
// / eslint-disable no-unused-vars /
// / eslint-disable prettier/prettier /
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../Reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;