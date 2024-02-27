const {Router} = require("express");
const  router = Router();
const {moviesRouter} = require("./moviesRouter");
router.use("/movies",moviesRouter);
module.exports={router};