const tempData = [
    {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
  ];

//  const axios = require("axios");
 

class MovieClass {
    constructor({title, poster, director,year,duration,genre,rate}) {
        if (!title || !poster || !director) {
            console.log('Se requieren todas las propiedades: title, poster y director.');
            throw new Error('Se requieren todas las propiedades: title, poster y director.');

        }
        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
      }
     
    }

  
     
  // async function  getAllMovies (){
  //   try{
  //     const {data} = await axios.get("https://henry-movies-dev-sgtm.3.us-1.fl0.io/");
  //     const movies =  data.map(movie => {
  //     return new Movie(movie);
  //   });

  //   console.log(movies);

  //   return movies;
    
  //   }
  //   catch({message}) {
  //     console.log('Error al obtener datos en fun getAllMovies:', message);
  //   }
  // };

// module.exports={getAllMovies,Movie};
const Movie = require("../models/Movie");

//! CONSULTAS A DB
module.exports = {
  getMoviesService: async () => {
    const allMovie = await Movie.find();
    const movies =  allMovie.map(movie => {
      return new MovieClass(movie);
    });

    return movies;
  },
  postMoviesService: async ({title,year,director,duration,genre,rate,poster}) => {
    const newMovie = new Movie({
      title,year,director,duration,genre,rate,poster
    }) ;
    const savedMovie = await newMovie.save();
    return savedMovie;
  },
}