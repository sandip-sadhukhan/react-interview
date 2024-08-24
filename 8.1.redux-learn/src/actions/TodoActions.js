export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {Todo: {todos}} = getState();

    const hasTodo = todos.find(i => i.todo === todo);

    if (!hasTodo && todo !== '') {
        dispatch({
            type:"ADD_TODO", 
            payload: [...todos, {id: todo, todo}]
        })
    }
}

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {Todo: {todos}} = getState();

    const hasTodo = todos.find(i => i.todo === todo);

    if (hasTodo) {
        dispatch({
            type:"REMOVE_TODO", 
            payload: todos.filter(i => i.id !== todo)
        })
    }
}