import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

// add middleware
let finalCreateStore = compose(
	applyMiddleware(logger(/*can config here*/))
)(createStore);

export default function configureStore(initialState = {todos: [] }) {
	return finalCreateStore(rootReducer, initialState);
};
