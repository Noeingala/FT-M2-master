import React from 'react';
import './Timer.css'

const Timer = () => {

const [segundos, setSegundos] = React.useState(0);
const [activo, setActivo] = React.useState(false);
const [tipo, setTipo] = React.useState('contador');
const myRef =  React.useRef(null); //referencia que se queda mirando al input por si hay algun cambio

React.useEffect(()=>{
  let intervalo = null;
  if(activo && tipo === 'contador'){
    intervalo = setInterval(()=>{
      setSegundos(prevState => prevState+1);
    }, 1000);
  }  
  if(activo && tipo === 'Cuenta Regresiva'){
    intervalo = setInterval(()=>{
      setSegundos(prevState =>prevState-1);
    }, 1000); 
  }
  if(!activo && segundos !== 0 && tipo==='contador'){
    clearInterval(intervalo);
  }
  if(segundos === 0  && tipo === 'Cuenta Regresiva'){
    reset();
    clearInterval(intervalo);
  }
  return () => clearInterval(intervalo);
},[activo, segundos,  tipo]);

// hace que pase de inicio a pausa el boton
function toggle(){
  setActivo(!activo);
}

function reset(){
  setSegundos(0);
  setActivo(false);
}

function cambioTipo(){
  tipo === 'contador' ? setTipo('Cuenta Regresiva') : setTipo('Contador');
}

function agregaSegundos(){
  let value = myRef.current.value;
  setSegundos(value);
}


  return (
    <div className="app">
      <div className="time">
        {segundos} S
      </div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {/* si esta activo, resolve pausa, sino resolve inicio */}
          {activo? 'Pausa' : 'Inicio'}  
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {
        tipo === 'Cuenta Regresiva' &&
        <input type="number" 
               ref={myRef} //punto de referencia
               placeholder="Ingresa Segundos" 
               autoComplete="off"
               onChange={agregaSegundos}
        />
      }
    </div>
  );
};

export default Timer;
