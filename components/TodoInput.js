import React from 'react';
//we are now getting this from the parent component as props
// thanks to the mapDispatchToProps
//  import actions from '../redux/actions'; 

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
		// this.props.dispatch(actions.addTodo(this.state.inputText));
		//no need to call the dispatcher anymore
		this.props.addTodo(this.state.inputText);
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input 
						type="text"
						placeholder="Type in your todo"
						value={this.state.inputText}
						onChange={this.handleChange.bind(this)}
						ref="theText"/>
					<input type="submit" text="Submit"/>
				</form>
			</div>
		);
	}

	
}

export default TodoInput;