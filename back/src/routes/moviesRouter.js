const {Router} = require("express");
const moviesRouter = Router();
const moviesController = require("../controllers/moviesController");
const { MiddelwarePostMovies } = require("../middlewares/middelwareMovie");
moviesRouter.get("/",moviesController.getAllMovies )
moviesRouter.post("/",MiddelwarePostMovies,moviesController.postMovies)
module.exports={moviesRouter};