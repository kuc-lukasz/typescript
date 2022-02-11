const todos: string[] = [];

const addTodo = (factor: string) => {
    todos.push(factor);
};

addTodo("pranie");

todos.forEach((todo) => {
    console.log(todo);
});
