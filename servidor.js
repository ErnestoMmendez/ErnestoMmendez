import e from "express";
import express from "express";
import mysql from "mysql";
import cors from "cors";

//Creamos una instancia de express
const app=express();
app.use(cors());

//Crear la conexión
const conexion= mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotitas' 
})

//Verificamos la conexion
conexion.connect(function(error){
    if(error){
        console.log("Error al conectar")
    }else{
        console.log("Conectado exitosamente");
    }
});

//Consultar la lista de mascotas
app.get("/obtenermascotas",(peticion,respuesta)=>{
    const sql = "SELECT * FROM mascotas";
    conexion.query(sql,(error,resultado)=>{
    if(error) return respuesta.json({Error: 'Error en la consulta'})
    return respuesta.json({Estatus: 'Exitoso', Resultado: resultado})
    });
});

//Iniciamos el servidor
app.listen(8081,()=>{
    console.log("Servidor iniciado")
});