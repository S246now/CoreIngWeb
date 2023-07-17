function newSong() {
    const [isInvalid, setIsInvalid] = useState(false);

    //get a la base de datos para obtener taskId y studentId
    const taskId = ;
    const studentId = ;
    const nameInputRef = useRef();
    const singerInputRef = useRef();
    const tempoInputRef = useRef();

    function sendTaskHandler(event) {
        event.preventDefault();
        //toma los valores
        const enteredName = nameInputRef.current.value;
        const ssss = ProductivityInputRef.current.value;
        //añade validación
        if (
            !enteredName ||
            enteredName.trim() === '' ||
            !ssss ||
            ssss.trim() === ''
        ) {
            setIsInvalid(true);
            return;
        }
        //objeto que pasa a tasks.js
        const reqBody = ({
            name: enteredName,
            singer: ssss,
            tempo: ,
            taskId: ,
            //studentId: ,
        });
        console.log(reqBody);

        // send data to API
        fetch('/api/tasks/'+ taskId + studentId, {
            method: 'POST',
            body: JSON.stringify(reqBody), //data package que se obtiene del componente 'new-comment' en 'onAddComent'.    email,name y text. los mismos que deberíamos buscar en el api route [eventId].js
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
            <h1>Canciones</h1>
            <div >
                <div >
                    <label htmlFor='email'>Nombre de la canción: </label>
                    <input type='text' id='email' ref={timeInputRef} />
                </div>
                <div >
                    <label htmlFor='name'>nombre del cantante o compositor: </label>
                    <input type='text' id='name' ref={singerInputRef} />
                </div>
                <div >
                    <label htmlFor='name'>Tempo de la canción: </label>
                    <input type='text' id='name' ref={tempoInputRef} />
                </div>
                {isInvalid && <p>Please enter a valid email address and comment!</p>}

                <button>Agregar otra canción</button>
                <br />
                <br />
                <button>Guardar</button>
            </div>

        </div>
    )
}

export default newSong;