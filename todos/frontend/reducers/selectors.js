const allToDos = (state) => {
    return Object.keys(state.todos).map((id) => {
        return state.todos[id];
    });
};

export default allToDos;