import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

// add middleware
let finalCreateStore = compose(
	applyMiddleware(logger(/*can config here*/))
)(createStore);

export default function configureStore(initialState = {todos: [] }) {
	return createStore(reducer, initialState);
};
