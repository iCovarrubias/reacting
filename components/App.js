import React from 'react';
// import React, {Component} from 'react'; //another way to pull React.Component
import TextInput from './TextInput';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1> Todo List</h1>
				<TextInput/>
			</div>
			
		);
	}
}


//another way of creating react components:
/*
var App = React.createClass({
	render(){...}
})
*/
export default App;
