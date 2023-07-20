import TaskList from "../../components/tasks/taskList";
import TableTask from "../../components/tasks/tableTask";
import { useEffect, useState } from "react";

function TaskPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.tasks) {
                    setTasks(data.tasks);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <br />
            {/* show Table */}
            <TaskList tasks={tasks} />
        </div>
    )
}

export default TaskPage;