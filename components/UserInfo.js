import React from 'react';


class UserInfo extends React.Component {
	
	handleNewId() {
		//dispatch an action
		this.props.createNewUserId();
	}


	render() {
		return (
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
			</li>
		);
	}
}

export default UserInfo;