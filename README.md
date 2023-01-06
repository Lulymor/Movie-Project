## Movie-Project
## Introduction
The Movie-Project is a website designed to display the information and upcoming showtimes of popular films playing in a local theater. It provides users with information pertaining to the titles, descriptions, showtimes, and actors starring in these pictures.
## Project Goals
- Utilize an API to render information about the films onto the webpage
- Listen for events that display information in different ways, including a "mouseover" to display the different movies and their information, a "submit" form to enter user reviews about the films after viewing, and a "click" event
## Project Setup
- Run the json server and fetch the API information to display the film details on the webpage
- Open the index.html to view the page and interact with the rendered data
- View the code written in the java.js file
## Project Endpoints
- The base URL for the project is http://localhost:3000
- The endpoints that will be needed as well:
- GET: /movie-listing-right
- GET: /movie-listing-left
## Project Core Deliverables
- To see all of the films listed in the div rendered onto the page. The page should display a movie poster for the film being viewed on the left side of the projector screen, as well as the title, description, and showtimes of this film displayed in the center of the projector screen. On the right of the projector screen should be the previous reviews entered by users who viewed the films, and below this will be a review submit form that can be utilized to enter new reviews for the film.
- To use the event listeners to interact with the data being rendered. The submit form will enable users to create their own reviews about the films they have seen. The mouseover event will allow for quick transitions between the films on the page by simply hovering your cursor over the movie posters. This will display the data of each individual film seamlessly without needing to be clicked on.