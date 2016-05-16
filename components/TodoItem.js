import React from 'react';
import actions from '../redux/actions'

class TodoItem extends React.Component {

	handleComplete() {
		console.log('complete click')
		this.props.actions.completeTodo(this.props.todo.id);
	}

	handleDelete(){
		console.log('delete click')
		this.props.actions.deleteTodo(this.props.todo.id);
	}

	render() {
		return (
			<li>
				<div>{this.props.todo.text}</div>
				<button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
				<button onClick={this.handleDelete.bind(this)}>Delete todo</button>

			</li>
		);
	}

};


export default TodoItem;