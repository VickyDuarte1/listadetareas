import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'; 
//paquete uuid--->creoa id npm install uuid 


function TareaFormulario(props){

    const[input, setinput]= useState ('')

    const manejarCambio=e=>{
setinput(e.target.value)//extrae el valor del campo de texto ingresado por usuario
}

    const manejarEnvio= e => {
        e.preventDefault();//evita que se reinicie y se cargue todo de nuevo
    //crear obj que representa la tarea nueva

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false,
        }
        props.onSubmit(tareaNueva);//--->hace un prop y lo pasa a la lista de tareas como estado
    }

    return (
<form className='tarea-formulario'
onSubmit={manejarEnvio}//eventlistener 
>

<input className='tarea-input'
type='text'
placeholder='Ingresa la tarea'
name='texto'
onChange={manejarCambio}
/>

<button className='tarea-boton'>
    Agregar
</button>

</form>

    );
}

export default TareaFormulario;