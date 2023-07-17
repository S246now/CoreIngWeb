import TaskItem from "./taskItem";

function TaskList(props) {

    const { items } = props;

    return (
        <ul>
            {/* A component that defines the jsx codefor the list */}
            {/* and pass some data  */}
            {items.map(task =>
                <TaskItem /* sending data to TaskItem for format */
                    key={task.id}/* react expect this when we output a list dynamicly */
                    id={task.id}
                    type={task.type}
                    method={task.method}
                />
            )}
        </ul>

    )
}

export default TaskList;