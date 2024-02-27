
function rendSlides(arrData) {
    let cont =0;
   arrData.forEach(function(cards) {
     cont++;
     if(cont<4)
     {
      const slidesImg = document.getElementById("s"+cont.toString());
      slidesImg.src = cards.poster;
      console.log(cards.poster)
     }
   
   });
   
  
  }

  module.exports = rendSlides;
