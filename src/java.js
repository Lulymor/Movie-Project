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
        newImage.addEventListener('mouseover', () => {
            renderMovies(movie);
        })
    })
}
fetch('http://localhost:3000/movie-listing-left')
    .then(response => response.json())
    .then(movies => renderMoviesLeft(movies))
function renderMoviesLeft(movies) {
    movies.forEach(movie => {
        const newImage = document.createElement('img')
        newImage.alt = movie.blurb
        const newLi = document.createElement('li')
        newLi.appendChild(newImage)
        newImage.src = movie.image
        leftList.appendChild(newLi);
        newImage.addEventListener('mouseover', () => {
            renderMovies(movie)
        })
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
newReviews.textContent = ""
    movieName.textContent = movies.name
    synopsis.textContent = movies.synopsis
    movieImage.src = movies.image
    movies.reviews.forEach(reviews => {
    const newLi = document.createElement('li')
    newLi.textContent = reviews
    newReviews.appendChild(newLi)
        // movieImage.addEventListener('mouseover', (event) => {
        // })
})
const starring = document.getElementById('starring')
starring.textContent =`Starring: ${movies.starring}`
}
const newReviewForm = document.getElementById('reviews-form')
newReviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(newReviewForm)
    const newReview = document.getElementById('review-form-text').value
    const reviewList = document.getElementById('reviews')
    const reviewLI = document.createElement('li')
    reviewLI.textContent = newReview
    reviewList.appendChild(reviewLI)
    newReviewForm.reset();
})