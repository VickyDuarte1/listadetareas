import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}){
    return (
        <div className= {completada?'tarea-contenedor completada':'tarea-contenedor'}>
            <div className='tarea-texto'
            onClick={()=> completarTarea(id) }//con el id me aseguro que corresponda el completar tarea con la tarea que se quiere seleccionar como tal
            >
                {texto}
            </div>

            <div 
            className= 'tarea-icono'
            onClick={()=> eliminarTarea(id)}>
            <AiOutlineCloseCircle/>
            </div>
        </div>
    );
}

export default Tarea;