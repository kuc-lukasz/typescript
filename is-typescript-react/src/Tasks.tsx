import { TaskInterface } from "./definitions/TaskInterface";

interface TaskProps {
    task: TaskInterface;
}

export const Tasks = ({ task }: TaskProps) => {
    return <h2>{task.name}</h2>;
};
