document.addEventListener("DOMContentLoaded", function () {
  const featuredMovie = {
      title: "Featured Movie Title",
      rating: "⭐⭐⭐⭐⭐",
      description: "Short description of the featured movie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "featured-movie.jpg"
  };

  const popularMovies = [
      { title: "Movie Title 1", image: "movie1.jpg" },
      { title: "Movie Title 2", image: "movie2.jpg" },
      { title: "Movie Title 3", image: "movie3.jpg" },
      { title: "Movie Title 4", image: "movie4.jpg" }
  ];

  const latestReviews = [
      {
          title: "Movie Title 1",
          review: `"Amazing movie, highly recommended! Great story and characters..."`,
          link: "#"
      },
      {
          title: "Movie Title 2",
          review: `"A thrilling adventure from start to finish, kept me on the edge..."`,
          link: "#"
      }
  ];

  // Render Featured Movie
  const featuredMovieSection = document.getElementById("featured-movie");
  featuredMovieSection.innerHTML = `
      <img src="${featuredMovie.image}" alt="Featured Movie">
      <div class="featured-movie-info">
          <h2>${featuredMovie.title}</h2>
          <p>${featuredMovie.rating}</p>
          <p>${featuredMovie.description}</p>
      </div>
  `;

  // Render Popular Movies
  const popularMoviesGrid = document.getElementById("popular-movies");
  popularMovies.forEach(movie => {
      popularMoviesGrid.innerHTML += `
          <div class="movie-item">
              <img src="${movie.image}" alt="${movie.title}">
              <p>${movie.title}</p>
          </div>
      `;
  });

  // Render Latest Reviews
  const latestReviewsSection = document.getElementById("latest-reviews");
  latestReviews.forEach(review => {
      latestReviewsSection.innerHTML += `
          <div class="review-item">
              <h3>${review.title}</h3>
              <p>${review.review}</p>
              <p><a href="${review.link}">Read more</a></p>
          </div>
      `;
  });
});
document.addEventListener('DOMContentLoaded', () => {
    // get the category from the URL, category.html?category=action
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // get the movie list container+ category title elements
    const movieList = document.getElementById('movie-list');
    const categoryTitle = document.getElementById('category-title');

    if (category && categories[category]) {
        // update category title
        categoryTitle.textContent = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

        // populate the movie list
        categories[category].forEach(movie => {
            const movieCard = document.createElement('li');
            movieCard.style.position = "relative";
            movieCard.innerHTML = `
                <div class="movie-card">
                    <a href="movie-info.html?title=${encodeURIComponent(movie.title)}"><img src="${movie.imgSrc}" alt="${movie.title}"></a>
                    <div class="movie-details">
                        <span class="rating">★ ${movie.imdbRating}</span>
                        <h2>${movie.title}</h2> 
                    </div>
                    
                    <div class="movie-description">
                        <p class="additional-info">
                            <span class="imdb-rating">IMDb: ${movie.imdbRating}</span>
                            <span class="year">${movie.year}</span>
                            <span class="duration">${movie.duration}</span>
                        </p>
                        <p>${movie.description}</p>
                        <p>Country: ${movie.country}</p>
                        <p>Genre: ${movie.genre}</p>
                        <a class="watch-movie" href="${movie.link}">Watch Movie</a>
                    </div>

                </div>
                
            `;
            movieList.appendChild(movieCard);

            const description = movieCard.querySelector('.movie-description');

            // movieCard.addEventListener('mouseover', () => {
            //     const rect = movieCard.getBoundingClientRect();
            //     description.style.top = `${rect.top + window.scrollY}px`;
            //     description.style.left = `${rect.right + 10}px`;
            //     description.style.display = 'block';
            // });

            // movieCard.addEventListener('mouseout', () => {
            //     description.style.display = 'none';
            // });
        });
    } else {
        categoryTitle.textContent = 'Category not found';
    }
});
 // star rating
 const stars = document.querySelectorAll('.star');
 let selectedRating = 0;

 stars.forEach(star => {
     star.addEventListener('mouseover', () => {
         stars.forEach(s => {
             if (s.dataset.value <= star.dataset.value) {
                 s.classList.add('hover');
             } else {
                 s.classList.remove('hover');
             }
         });
     });

     star.addEventListener('mouseout', () => {
         stars.forEach(s => {
             s.classList.remove('hover');
         });
     });

     star.addEventListener('click', () => {
         selectedRating = star.dataset.value;
         stars.forEach(s => {
             if (s.dataset.value <= selectedRating) {
                 s.classList.add('selected');
             } else {
                 s.classList.remove('selected');
             }
         });
     });
 });

 const rateButton = document.getElementById('rate-button');
 rateButton.addEventListener('click', () => {
     if (selectedRating > 0) {
         alert(`You rated this movie ${selectedRating} stars!`);
         //  send the rating to a server
         console.log(`Rating: ${selectedRating}`);
     } else {
         alert('Please select a rating.');
     }
 });
 

