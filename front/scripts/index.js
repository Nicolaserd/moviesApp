
const rendSlides = require('./rendSlides');
const rendCards = require('./rendCards');
const menuCss = require("./menu");
const axios = require("axios");

async function movies(){
  try{
    const {data} = await axios.get("http://localhost:3002/movies");
    console.log(data);
    rendCards(data);
    rendSlides(data);

  }
  catch({message}) {
    console.log('Error al obtener datos:', message);
    const containerCards = document.getElementById("container_cards");
    const parr = document.createElement("p");
    parr.classList.add("parr");
    parr.innerHTML="No se pudo cargar lo datos";
    containerCards.appendChild(parr);
    
  }
}
console.log("v 1.0.3")
menuCss();
movies();


// $.get("https://students-api.2.us-1.fl0.io/movies",(data,status)=>{
//   if(status==="success")
//   {
//     rendCards(data);
//     rendSlides(data);

//   }
//   else{
//     const containerCards = document.getElementById("container_cards");
//     const parr = document.createElement("p");
//     parr.classList.add("parr");
//     parr.innerHTML="No se pudo cargar lo datos";
//     containerCards.appendChild(parr);
//     console.log(status);
//   }

 
// });


