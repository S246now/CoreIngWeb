import TaskList from "../../components/taskList";

function TaskPage() {
    //save the tasks
    const tasks = getAllTasks();
    return(
        <div>
            <h1>Main page of Tasks</h1>
            <h2>Here is a list of task</h2>
            <br/>
            <TaskList items={tasks}/>{/* passing data */}
        </div>
    )
}

export default TaskPage;