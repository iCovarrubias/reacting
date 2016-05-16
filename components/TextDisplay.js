import React from 'react';

class TextDisplay extends React.Component {

	render(){
		return (<div>
			<div>Im displaying text {this.props.textVal}</div>
			<button onClick={this.handleClick.bind(this)}>Delete one letter</button>
			</div>);
	}

	handleClick(){
		console.log('button click');
		this.props.deleteLetter();
	}

}

export default TextDisplay;