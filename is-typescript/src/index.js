var todos = [];
var addTodo = function (factor) {
    todos.push(factor);
};
addTodo("pranie");
todos.forEach(function (todo) {
    console.log(todo);
});
