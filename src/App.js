import './App.css';
import listalogo from './imagenes/listalogo.png';
import ListaDeTareas from './componenetes/ListaDeTareas';

function App() {
  return (
    <div className="App-de-tareas">
      <div className='logo-contenedor'>
        <img src={listalogo}
        className='logo' 
        alt= 'logolista'
        />
        <div className='tareas-lista-principal'>
          <h1>Mi lista de tareas </h1>
          <ListaDeTareas/>
        </div>
         </div>
    </div>
  );
}

export default App;


