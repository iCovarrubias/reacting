let actions = {
	addTodo(text) {
		return {
			type: 'ADD_TODO',
			text: text
		}
	},

	completeTodo(id) {
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},

	deleteTodo(id) {
		return {
			type: 'DELETE_TODO',
			id: id
		}
	}
};

export default actions;


/* 
	All of these exports below are valid, we are using the one above
	for consistency with the tutorial
*/

/*
	export default {
	addTodo(text) {
		return {
			type: 'ADD_TODO',
			text
		}
	}
};*/

/*export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	};
};*/