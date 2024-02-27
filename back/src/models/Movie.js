const mongoose = require("mongoose");
//! 5-Creamos COLECCION
//!Paso 5
//* A-crear schema
//* el como tiene que ser es el schema
//* Validar
const movieSchema = new mongoose.Schema({
    //*_id: lo maneja mongoose  se encarga mongoose
    title: {
        type:String,
        required:true,
        //unique no deja  dos iguales
        unique:true
    },

    year: {
        type:Number,
        required:true
    },

    director:{
        type:String,
        required:true
    } ,

    duration: {
        type:String,
             
    },
    genre: Array,
    rate:Number,
    poster:String
});

//! conbinacion  unica entre name y banda
//*discSchema.index({name:1,"band.name":1},{unique:true});

//! Crear modelo
//* Disc => es un objeto, la representacion que le da a mongoose
//* es un modelo con el eschema que tiene arriba, 
//? se necesita crear el schema
const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;