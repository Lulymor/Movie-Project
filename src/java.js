fetch('http://localhost:3000/movie-listings')
.then(response => response.json())
.then(movies => {

    console.log(movies);
    
    const movieListLeft = document.getElementById('movies-list-left');
    const movieListRight = document.getElementById('movies-list-right');

    movieDetails(movies[0])

})


function movieDetails(movie) {

    let movieName = document.getElementById('movie-name');
    movieName.textContent = movie.name;

    let movieImage = document.getElementById('movie-img');
    movieImage.src = movie.image;

    let movieSynopsis = document.getElementById('description-display');
    movieSynopsis = movie.synopsis;

    let movieReviews = document.getElementById('reviews');
    movieReviews.textContent = movie.reviews;

    let movieStarring = document.getElementById('starring');
    movieStarring.textContent = movie.starring;



}


const submitReview = document.getElementById('reviews-form')

addEventListener("submit", (event) => {
   
        event.preventDefault()}
    )
