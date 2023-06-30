//1. IMPORTAR REACT
import React, { useEffect } from 'react';
import axios from 'axios';
//AGREGAR LOS ENLACES
import { Link } from 'react-router-dom';
//2. CREAR LA FUNCION
function Mascota (){
//3. METODO QUE REGRESA EL HTML
    const [mascotas,setMascotas] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8082/obtenerMascotas')
        .then(respuesta=>{
            if(respuesta.data.mensaje==='exitoso'){
            setMascotas(respuesta.data.contenido);

        }
    })
            
     .catch(error=>console.log("error al recuperar datos"));

    } );
    return(
    <>
    { mascotas.map((lamascota,index)=>{
        return 
         <h1>{lamascota.nomnre}</h1>
    }
    )}
        </>
    )
}
export default Mascota;