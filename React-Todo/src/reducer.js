export const todoReducer = (todos, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return [...todos, { 'id': todos.length + 1, 'title': payload, 'status': 'todo' }];

        case "SET_INIT_DATA":
            return payload;

        case "CHANGE_TODO_STATUS":
            return todos.map(todo => {
                var newTodo = Object.assign({}, todo);
                // var newTodo = [...todo];
                if (todo.id === +payload) {
                    if (todo.status === "done") {
                        newTodo.status = "todo";
                    } else {
                        newTodo.status = "done";
                    }
                }
                console.log(todo)
                return newTodo;
            });

        default:
            break;
    }
}