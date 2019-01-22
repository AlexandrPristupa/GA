import { createStore } from 'redux';
import reducers from './combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers, composeWithDevTools());
