import classes from "./tableTask.module.css";

function TableTask(props) {
    const { tasks } = props;

    return (
        <div className={classes.tableContainer}>
            <h2>Listado de Tareas</h2>
            <br/>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Tiempo de Finalización (minutos)</th>
                        <th>Productividad (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.taskName}</td>
                            <td>{task.taskTime}</td>
                            <td>{task.productivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableTask;



