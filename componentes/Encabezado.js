//1. IMPORTAR REACT
import React from 'react';
//AGREGAR LOS ENLACES
import { Link } from 'react-router-dom';
//2. CREAR LA FUNCION
function Encabezado (){
//3. METODO QUE REGRESA EL HTML
    return(
    <>
    <header> 
        <h1> OntaMiMascota.com</h1>
    </header>
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/contacto">Contactanos</Link>
    </nav>
    </>
    );
}

//4. EXPORTAMOS

export default Encabezado;