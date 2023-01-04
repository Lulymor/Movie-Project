const rightList = document.getElementById('movies-list-right');
const leftList = document.getElementById('movies-list-left')
fetch('http://localhost:3000/movie-listing-right')
    .then(response => response.json())
    .then(movies => renderMoviesRight(movies))


function renderMoviesRight(movies) {
        movies.movies.forEach(movie => {
            const newImage = document.createElement('img')
            const newLi = document.createElement('li')
            newLi.appendChild(newImage)
            newImage.src = movie.image
            rightList.appendChild(newLi);

        });
}
    
fetch('http://localhost:3000/movie-listing-left')
    .then(response => response.json())
    .then(movies => renderMoviesLeft(movies))
   
function renderMoviesLeft(movies) {
    movies.forEach(movie => {
        const newImage = document.createElement('img')
        const newLi = document.createElement('li')
        newLi.appendChild(newImage)
        newImage.src = movie.image
        leftList.appendChild(newLi);
    })
}