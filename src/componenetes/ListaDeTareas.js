import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea.js';
import '../hojas-de-estilo/ListaDeTareas.css'


function ListaDeTareas(){
//estado inicial de la lista de tareas, array tareas y setTareas como convencion para asignar el estado de la tarea
    const [tareas, setTareas] = useState([])
    const agregarTarea= tarea => {
if(tarea.texto.trim()){//quito los espacios innesesarios y me fijo que la tarea exista
    tarea.texto=tarea.texto.trim();
    const tareasActualizadas=[tarea, ...tareas];//traigo las tareas anteriores con ...
    setTareas(tareasActualizadas);//toma las tareas anteriores y agrego la nueva
}
    }

    const eliminarTarea= id => {
        const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);//asi con el metodo filter me aseguro que se filtren las tareas que correspondan con la propiedad id te la tarea que coincida con el id que se pide
        setTareas(tareasActualizadas);//seteo las tareas actualizadas
    }

    const completarTarea=id=> {
        const tareasActualizadas= tareas.map(tarea=>{
            if(tarea.id==id){
                tarea.completada= !tarea.completada; //asi manejo el estado de la tarea de tachar a destachar :D
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }
    return (
<>
<TareaFormulario onSubmit={agregarTarea} //prop onsubmit 
/>
<div className='tareas-lista-contenedor'>
{
//renderizar lista de tareas
tareas.map((tarea)=> //toma cada tarea, las pasa como argumento y realiza
<Tarea 
    key={tarea.id}
    id={tarea.id}//debo pasarlo doble porque sin el key tengo problemas y da error
    texto={tarea.texto}
    completada={tarea.completada} 
    completarTarea={completarTarea}
    eliminarTarea={eliminarTarea}//paso la funcion eliminar tarea como prop
    />    
//cada tarea se representa como un objeto en el array
)
}

</div>
</>
    );
}

export default ListaDeTareas;