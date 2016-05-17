import React from 'react';
// import React, {Component} from 'react'; //another way to pull React.Component
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect }  from 'react-redux';
import { bindActionCreators }  from 'redux';
import actions from '../redux/actions'; 
import UserInfo from './UserInfo';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1> Todo List</h1>
				<UserInfo 
					user={this.props.user}
					actions={this.props.actions}/>
				<TodoInput addTodo={this.props.actions.addTodo}/>
				<TodoList
					actions={this.props.actions}
					todos={this.props.todos}/>
			</div>
			
		);
	}
}

function mapStateToProps(state) {
	return state;
}

//wraps all of the actions with the dispatcher and return them
/*
	This allows us to:
	1. Avoid passing the dispatcher to everu single component
	2. Pass only the the actions needed down to the child component
	3. From the child component, there's no need to call the dispatcher, just call
		the action passed from here as props
*/
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



//another way of creating react components:
/*
var App = React.createClass({
	render(){...}
})
*/


