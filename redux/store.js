import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers'; //imports ./reducer/index, like in node
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// add middleware
let finalCreateStore = compose(
	applyMiddleware(thunk, logger(/*can config here*/))
)(createStore);

export default function configureStore(initialState = {todos: [] }) {
	return finalCreateStore(rootReducer, initialState);
};
