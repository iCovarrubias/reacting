function getId(todos) {
	return todos.reduce((maxId, todo)=> {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

 export default function todoReducer(todos =[], action) {
	switch(action.type) {
		case "ADD_TODO":
			return [{
					text: action.text, //add new todo info
					completed: false,
					id: getId(state)
				}, ...todos];

		case "COMPLETE_TODO":
			return todos.map((todo)=> {
					return todo.id === action.id ? 
						Object.assign({}, todo, { completed: !todo.completed }): todo;
				});

		case "DELETE_TODO":
			return todos.filter((todo)=> {
					return todo.id !== action.id;
				});

		default:
			return todos;
	}
};
/*
*/