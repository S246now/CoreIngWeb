//unOrdered list
import TaskItem from "./taskItem";

function TaskList(props) {

    const { tasks } = props;

    return (
        <ul>
            {tasks.map(task =>
                <TaskItem /* sending data to TaskItem for validation and format */
                    key={task._id}/* react expect this when we output a list dynamicly */
                    id={task._id}
                    nombre={task.taskName}
                    tiempo={task.taskTime}
                    productividad={task.productivity}
                />
            )}
        </ul>

    )
}

export default TaskList; 