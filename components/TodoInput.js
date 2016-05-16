import React from 'react';
import actions from '../redux/actions';

class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ''
		};
	}

	handleChange() {
		this.setState({inputText:this.refs.theText.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

	render(){
		return (
			<div>
				<input 
					type="text"
					placeholder="Type in your todo"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
					ref="theText"/>
				<button onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		);
	}

	
}

export default TodoInput;