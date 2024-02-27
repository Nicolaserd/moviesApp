module.exports={
    MiddelwarePostMovies: async(req, res,next) => {
        try {
          const {title,year,director,duration,genre,rate,poster}=req.body;
          if (typeof year !== 'number' || String(year).length !== 4 || year >= new Date().getFullYear()) {
            throw new Error("El año debe ser un número de 4 dígitos y menor al año actual.");
        }
        if (title === '' || duration === '' || genre === '' || rate === '' || poster === ''||director==='') {
            throw new Error("Error: Campos vacíos.");
        
        }

        let urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(poster)) {

            throw new Error("Error: El enlace del póster no es válido.");
           
        }
        next();
          
        } catch (error) {
          res.status(500).json({message: error.message});
        }
       
           
      }
}