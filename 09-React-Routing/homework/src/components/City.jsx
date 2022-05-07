import React from "react";
import s from '../components/City.module.css'
//import { useParams } from "react-router-dom";

function City({city}){
    if(!city) {
        alert ('La Ciudad no existe.');
        return (<div>La Ciudad no existe.</div>)
    }
    // let params= useParams();
    // return(
    //     <div>Hola, soy la ciudad {params.cityId}</div>
    return(
    <div className={s.gral}>
        <div className={s.tarjeta}>
                <div className="container">
                    <h2 className={s.nombre}>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        
                    </div>
            </div>
        </div>
    </div>
    )
}


// class City extends React.Component{
//     render(){
//         return(
//             <div></div>
//         )
//     }
// }
//
export default City;