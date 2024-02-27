

async function postData(movieData) {
    try {
        const response = await axios.post("http://localhost:3002/movies", movieData);
        console.log('Respuesta del servidor:', response.data);
      
    } catch (error) {
        console.error('Error al enviar los datos:', error.message);
        
    }
}

document.getElementById('buttonForm').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    
    let title = document.getElementById('title').value.trim();
    let year = document.getElementById('year').value.trim();
    let director = document.getElementById('director').value.trim();
    let duration = document.getElementById('duration').value.trim();
    let genre = document.getElementById('genre').value.trim();
    let rate = document.getElementById('rate').value.trim();
    let poster = document.getElementById('poster').value.trim();

    
    if (title === '' || year === '' || duration === '' || genre === '' || rate === '' || poster === ''||director==='') {
        alert('Por favor, complete todos los campos.');
        console.log('Error: Campos vacíos.');
        return; 
    }

    
    if (isNaN(year)) {
        alert('El año debe ser un número.');
        console.log('Error: El año debe ser un número.');
        return; 
    }

   
    if (isNaN(rate)) {
        alert('La calificación debe ser un número.');
        console.log('Error: La calificación debe ser un número.');
        return; 
    }

    let urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(poster)) {
        alert('El enlace del póster no es válido.');
        console.log('Error: El enlace del póster no es válido.');
        return; 
    }

    console.log('Formulario enviado con éxito.');

 
    let movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
        <h2>${title} (${year})</h2>
        <p><strong>Duración:</strong> ${duration}</p>
        <p><strong>Género:</strong> ${genre}</p>
        <p><strong>Director:</strong> ${director}</p>
        <p><strong>Calificación:</strong> ${rate}</p>
        <img src="${poster}" alt="${title} Poster">
    `;

 
    let movieCardContainer = document.getElementById('movieCardContainer');
    movieCardContainer.appendChild(movieCard);

    let genereArray = genre.split(/[,\s]+/);
    console.log(genereArray);

    let movieData = {
        title: title,
        year: parseInt(year),
        director:director,
        duration: duration,
        genre: genereArray,
        rate: parseFloat(rate),
        poster: poster
    };

    
    postData(movieData);

    alert('Película agregada correctamente.');


});

document.getElementById('clearButton').addEventListener('click', function() {
 
    document.getElementById('movieForm').reset();

  
    let movieCardContainer = document.getElementById('movieCardContainer');
    movieCardContainer.innerHTML = ''; 
});
