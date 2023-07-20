import classes from "./taskItem.module.css";
import Link from "next/link";


function TaskItem(props) {
    //extract data
    const { id, nombre, tiempo, productividad } = props
    //give format to the data as needed
    const taskDetail = `/tasks/${id}`;

    return (
        <li className={classes.li}>
            <h3>Tipo de Tarea: {nombre}</h3>
            <br />
            <p>Tiempo de Finalización: {tiempo} minutos</p>
            <br />
            <p>Nivel de Productividad: {productividad} %</p>
            <br />
            <Link href={taskDetail}>Explore Task</Link>
        </li>
    )
}

export default TaskItem;