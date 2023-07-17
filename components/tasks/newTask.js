import { useRef, useState } from 'react';

function NewTask() {
    const [isInvalid, setIsInvalid] = useState(false);

    const timeInputRef = useRef();
    const ProductivityInputRef = useRef();

    function sendTaskHandler(event) {
        event.preventDefault();
        //toma los valores
        const enteredTime = timeInputRef.current.value;
        const enteredProductivity = ProductivityInputRef.current.value;
        //añade validación
        if (
            !enteredTime ||
            enteredTime.trim() === '' ||
            !enteredProductivity ||
            enteredProductivity.trim() === ''
        ) {
            setIsInvalid(true);
            return;
        }
        //objeto que pasa a tasks.js
        const reqBody = ({
            time: enteredTime,
            productivity: enteredProductivity,
        });
        console.log(reqBody);

        // send data to API
        fetch('/api/tasks/', {
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
        <form onSubmit={sendTaskHandler}>
            <div >
                <div >
                    <label htmlFor='email'>Tiempo de Finalización: </label>
                    <input type='text' id='email' ref={timeInputRef} />
                </div>
                <div >
                    <label htmlFor='name'>Your name</label>
                    <input type='text' id='name' ref={ProductivityInputRef} />
                </div>
            </div>
            {isInvalid && <p>Please enter a valid email address and comment!</p>}
            <button>Continuar</button>
        </form>
    );
}

export default NewTask;
