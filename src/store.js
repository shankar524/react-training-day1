import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import listReducer from './reducers/index';

const middleware = applyMiddleware(thunk);

export default createStore(listReducer, middleware);
