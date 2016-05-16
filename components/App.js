import React from 'react';
// import React, {Component} from 'react'; //another way to pull React.Component
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect }  from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1> Todo List</h1>
				<TodoInput
					dispatch={this.props.dispatch}/>
				<TodoList
					dispatch={this.props.dispatch}
					todos={this.props.todos}/>
			</div>
			
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App);



//another way of creating react components:
/*
var App = React.createClass({
	render(){...}
})
*/


