import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducers from './js/reducuers';

const store = createStore(allReducers , applyMiddleware(logger , thunk));

export default store;
