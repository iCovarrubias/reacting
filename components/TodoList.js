import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return (
							<TodoItem
								dispatch= {this.props.dispatch}
								key={todo.id}
								todo={todo}/>
						);
					})
				}
			</ul>
		);
	}
}

export default TodoList;