// fetch('http://localhost:3000/movie-listings')
// .then(response => response.json())
// .then(movies => {

//     console.log(movies);
    
//     const movieListLeft = document.getElementById('movies-list-left');
//     const movieListRight = document.getElementById('movies-list-right');

//     movieDetails(movies[0])

// })


// function movieDetails(movie) {

//     let movieName = document.getElementById('movie-name');
//     movieName.textContent = movie.name;

//     let movieImage = document.getElementById('movie-img');
//     movieImage.src = movie.image;

//     let movieSynopsis = document.getElementById('description-display');
//     movieSynopsis = movie.synopsis;

//     let movieReviews = document.getElementById('reviews');
//     movieReviews.textContent = movie.reviews;

//     let movieStarring = document.getElementById('starring');
//     movieStarring.textContent = movie.starring;



// }


// const submitReview = document.getElementById('reviews-form')

// addEventListener("submit", (event) => {
   
//         event.preventDefault()}
//     )


fetch('http://localhost:3000/movie-listings')
.then(response => response.json())
.then(movies => {
    movieNav = document.getElementById('movie-list-left')
    
    movies.forEach(movie => {
        const movieImage = document.createElement('img')
        movieImage.src = movie.image

        movieImage.addEventListener('click', () => {
            displayMovieDetails(movie)
        })
        movieNav.appendChild(movieImage)
    })
    displayMovieDetails(movies[0])
})

function displayMovieDetails(movie) {

    const name = document.getElementById('movie-name')
    name.textContent = movie.name

    const image = document.getElementById('movie-img')
    image.src = movie.image

    const synopsis = document.getElementById('synopsis-display')
    synopsis.textContent = movie.synopsis

    const showtimes = document.getElementById('show-times')
    showtimes.textContent = movie.showtimes

    // const reviews = document.getElementById('reviews')
    // reviews.textContent = reviews.forEach(review => {
    //     let newLIreview = document.createElement('li');
    //     newLIreview.textContent = review
    //     reviews.appendChild(newLIreview);


}