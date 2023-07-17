
import { useReducer } from "react"
import Success from "./success";
import Bug from "./bug";
import { useQueryClient, useMutation } from "react-query";
/* useMutation hook permits delete, create and update data*/
import { añadirUsuario,getUsuarios } from "../lib/helper";


export default function AddUserForm({formData, setFormData}){
    const queryClient = useQueryClient()
    
    const addMutation = useMutation(añadirUsuario, {
        onSuccess:()=>{ /* actualizo la tabla */
            queryClient.prefetchQuery('usuarios', getUsuarios)
        }
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0) return console.log("No hay datos en el Formulario");
        console.log(formData)
        let{primernombre,primerapellido,elcorreo,fechanacimiento,password,status}=formData; 
        /* toman los datos de la propiedad 'name:' del formulario */
        const model={
            nombre: primernombre,
            apellido: primerapellido,
            correo: elcorreo,
            fechaNacimiento: fechanacimiento,
            contraseña:password
        }

        addMutation.mutate(model)

    }

    if(addMutation.isLoading)return<div>Cargando...</div>
    //if(addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
    //if(addMutation.isSuccess) return <Success message={"Añadido Correctamente"}></Success>

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="primernombre" placeholder="Nombre"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="primerapellido" placeholder="Apellido"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="elcorreo" placeholder="Correo"/>
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} name="fechanacimiento"/>
            </div>
            <div className="input-type">
                <input type="password" onChange={setFormData} name="password" placeholder="Contraseña"/>
            </div>
            <button>
                Agregar
            </button>

        </form>
    )
}