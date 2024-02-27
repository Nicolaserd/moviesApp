//!pasos
//* 1 i mongoose
//* 2 crear conexion
//* 3 invocamos la conexion en index.js
//? 4. crea BBDD // test(pordefecto)
//! 5 - crear coleccion
const mongoose = require("mongoose")
//*mongoose => ODM =>BBDD(MongoDB Atlas)
// *esta presente en todos lados
//*ATLAS URI
//? 4. crea BBDD // test(pordefecto)
require("dotenv").config();

//*CONECTAR A LA BASE DE DATOS
//*se conecta es una promesa
//*por eso el async / await
const dbConfig = async()=>{
    //!la conexion es una promesa
    await mongoose.connect(process.env.ATLAS_URI);
}

module.exports = dbConfig;
