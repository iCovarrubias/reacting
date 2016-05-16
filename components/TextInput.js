import React from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "initial text"
		};
	}

	deleteLetter() {
		this.setState({
			inputText: this.state.inputText.substring(0,this.state.inputText.length -1)
		})
	}

	render(){
		return (
			<div>
				<input 
					type="text"
					placeholder="This is going to be text"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
					ref="theText"/>
				<TextDisplay 
					textVal={this.state.inputText} 
					deleteLetter={this.deleteLetter.bind(this)} />
			</div>
		);
	}

	handleChange() {
		this.setState({inputText:this.refs.theText.value});
	}
}

export default TextInput;