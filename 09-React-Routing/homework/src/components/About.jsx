import React from "react";
import foto from '../img/foto.jpg';
import s from '../components/About.module.css'

//cuando construimos un componente, necesitamos importar React
// necesitamos crear la funcion, y retornar lo que queremos renderizar
//si recibe props, las tiene que recibir por parametros

export default function About(){
    return(
        <>
        <div className={s.gral}>
        <div className={s.tarjeta}>
           <h3 className={s.txt}> Hola! Soy Noe, esta es mi Weather App </h3>
            <img src={foto} className={s.foto}/>
        </div>
        </div>
        </>
    )
}