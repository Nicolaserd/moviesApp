const {getMoviesService,postMoviesService} = require("../services/moviesServices");


module.exports={
    getAllMovies:async(req,res)=>{
        try {
             res.status(200).json( await getMoviesService());
            
        } catch ({message}) {

            console.log("Error en controller getAllMovies",message);
        }
       
    },
    postMovies: async(req, res) => {
        try {
          const {title,year,director,duration,genre,rate,poster}=req.body;
          //!Validar datos
          let createdMovie = await postMoviesService({title,year,director,duration,genre,rate,poster});
          res.status(201).json(createdMovie);
        } catch (error) {
          res.status(500).json({message: error.message});
        }
       
    
      },
};
