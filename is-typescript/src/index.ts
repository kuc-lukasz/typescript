// Definiowanie interfejsu który zawiera nameTodo oraz user i są oba stringami
interface Task {
    nameTodo: string;
    user: string;
    priority: "normal" | "high" | "critical";
}

// Definiowanie todosów które są tablicą tasków. CZyli ma to być tablica która będzie miała Task jako obiekt
const todos: Task[] = [];

//Tutaj wprowadzam pojedyńczego taska
const addTodo = (todo: Task) => {
    todos.push(todo);
};

//Funkcja która dostanie tablicę, a w tej tablicy wyświetli w odpowiedni sposób informację o taskach
const workWithToDoArray = (array: Task[]) => {
    array.forEach((task, index) => {
        if (task.nameTodo.length < 15) {
            console.log(`[${task.user}] ${index + 1}. ${task.nameTodo}`);
        } else {
            console.log(
                `[${task.user}] ${index + 1}. ${task.nameTodo.slice(0, 19)}...`
            );
        }

        // definiuje co ma być wyświetlane, ma mocne sprawdzanie czyli musi sie zgadzać typ danych i wartość
        const taskContent =
            index + 1 + ". [" + todo.user + "] " + task.nameTodo;

        // jeśli todo.priority === coś tam to ->
        // Świtch to też pętla
        switch (todo.priority) {
            case "normal":
                console.log(taskContent);
                // break sprawia, że jeśli case === "normal" to zrobi to raz. Gdyby nie było break to normal 3x by wyświetlił
                break;
            case "high":
                console.warn(taskContent);
                break;
            case "critical":
                console.error(taskContent);
                break;
        }
    });
};
const todo: Task = {
    nameTodo: "Odbijanie",
    user: "Jarooo",
    priority: "normal",
};

addTodo(todo);

addTodo({
    nameTodo: "Umyj samochód",
    user: "Mietek",
    priority: "critical",
});

addTodo({
    nameTodo: "Umyj samochód jeszcze kilkanaście razy",
    user: "Mariusz",
    priority: "high",
});

workWithToDoArray(todos);
