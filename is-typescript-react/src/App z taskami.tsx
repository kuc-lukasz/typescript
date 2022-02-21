import { Profile } from "./Profile";
import { Tasks } from "./Tasks";
import { useEffect, useState } from "react";
import { TaskInterface } from "./definitions/TaskInterface";
import "./App.css";

function App() {
    const [tasks, setTask] = useState<TaskInterface[]>([]);

    useEffect(() => loadTasks(), []);

    const loadTasks = () => {
        setTask([
            {
                name: "Sprzatac pokoj",
                user: "Mariusz",
            },
            {
                name: "Umyć samochód",
                user: "Wiesiek",
            },
        ]);
    };
    console.log(tasks);

    return (
        <>
            <div>
                {tasks.map((task, key) => {
                    return (
                        <>
                            <Tasks key={key} task={task} />
                        </>
                    );
                })}
            </div>
            <div className="App">
                <Profile user="Mietek" city="Sopot" age={19} score={11} />
                <Profile user="Włodek" city="Gdańsk" age={47} />
            </div>
        </>
    );
}

export default App;
