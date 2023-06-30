//1. IMPORTAMO REACT
import React from "react";
import Encabezado from '../componentes/Encabezado';
//2. CREAMOS LA FUNCION INICIO
function Categorias (){
//.3 HTML
    return (
        <>
        <Encabezado/>
        <div className="container"> 
        <h1>Categorias</h1>
        <Mascota/>
        </div>
        </>
    );
}
export default Categorias;