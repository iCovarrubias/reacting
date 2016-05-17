import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purposes'
	}],
	user: {
		username: 'isma',
		id: 42 
	}
};

let store = configureStore(initialState);

//configure and create our store


render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('app'));

