function rendCards(arrData) {
  
    arrData.forEach(function(cards) {
      const containerCards = document.getElementById("container_cards");
    
      const card = document.createElement("div");
      card.classList.add("card");
      containerCards.appendChild(card);
    
      const aTituloPeli = document.createElement("a");
      aTituloPeli.classList.add("aTituloPeli");
      aTituloPeli.classList.add("mx-auto");
      aTituloPeli.classList.add("text-center");
      aTituloPeli.href= cards.poster;
      card.appendChild(aTituloPeli);
    
      const tituloPeli = document.createElement("h2");
      tituloPeli.classList.add("tiutuloCard");
      tituloPeli.classList.add("mx-auto");
      tituloPeli.textContent = cards.title;
      aTituloPeli.appendChild(tituloPeli);
    
      const imgPeli = document.createElement("img");
      imgPeli.classList.add("imgCard");
      imgPeli.classList.add("d-block");
      imgPeli.classList.add("mx-auto");
      imgPeli.classList.add("rounded"); 
      imgPeli.src = cards.poster;
      imgPeli.alt = cards.title;
      card.appendChild(imgPeli);
    
      const descriptionPeli = document.createElement("div");
      descriptionPeli.classList.add("descripcionCard");
      card.appendChild(descriptionPeli);
    
      const director = document.createElement("p");
      director.textContent = "Director: "+cards.director;
      descriptionPeli.appendChild(director);
    
      const duracion = document.createElement("p");
      duracion.textContent = "Duración: "+cards.duration;
      descriptionPeli.appendChild(duracion);
    
      const rate = document.createElement("p");
      rate.textContent = "Rate: "+cards.rate;
      descriptionPeli.appendChild(rate);
    
      const descripcion = document.createElement("p");
      descripcion.textContent = "Géneros : "+cards.genre;
      descriptionPeli.appendChild(descripcion);
    
    });
    }
    
    
  