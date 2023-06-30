//1. IMPORTAMO REACT
import React from "react";
import Encabezado from '../componentes/Encabezado';
//2. CREAMOS LA FUNCION INICIO
function Inicio (){
//.3 HTML
    return (
        <>
        <Encabezado/>
        <div className="container"> 
        <h1>Bienvenidos a nuestro portal</h1>
        
        </div>
        </>
    );
}
export default Inicio;