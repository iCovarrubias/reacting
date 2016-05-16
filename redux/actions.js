let actions = {
	addTodo(text) {
		return {
			type: 'ADD_TODO',
			text
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