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
fetch('http://localhost:3000/movie-listing-right')
    .then(response => response.json())
    .then(movies => renderMovies(movies.movies[0])) 




    function renderMovies(movies) {
const movieName = document.getElementById('movie-name')  
const synopsis = document.getElementById('description-display')
const movieImage = document.getElementById('movie-img')
const newReviews = document.getElementById('reviews')
    movieName.textContent = movies.name
    synopsis.textContent = movies.synopsis
    movieImage.src = movies.image
    movies.reviews.forEach(reviews => { 
    const newLi = document.createElement('li')
    newLi.textContent = reviews
    newReviews.appendChild(newLi)
 
    
})   ;
const showTimes = document.getElementById('show-times')
showTimes.textContent =`Showtimes: ${movies.showtimes}`
}

