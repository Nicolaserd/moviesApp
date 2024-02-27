const express = require("express");
const {router} = require("./routes/index");
const app = express();
// la solicitud toma este camino
const morgan = require("morgan");
const cors = require("cors");
//.use es para que la solicitud pase por un camino en este caso morgan
app.use(morgan("dev"));
// middleware, el cual sabe que limita las solicitudes de clientes
app.use(cors());
//middleware conbierte la info de .json a objeto js
app.use(express.json());
app.use(router);
module.exports= app;