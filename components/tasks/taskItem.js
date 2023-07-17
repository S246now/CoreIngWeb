//defines how the item task is gonna be shown
//defining the jsx extractor
import Link from "next/link";


function TaskItem(props) {
    //extract data
    const {id, type, tiempoFinalizacion, nivelProductivo} = props
    //give format to the data as needed
    const taskDetail = `/tasks/${id}`;

    return(
        <li>
            <img src="" alt=""/>
            <div>
                <div>
                    <h2>TITLE TASK</h2>
                    <div>
                        {}
                    </div>
                    <div>
                        {type}
                    </div>
                </div>
                <div>
                    <Link href={taskDetail}>Explore Task</Link>
                </div>
            </div>
        </li>
    )
}

export default TaskItem;