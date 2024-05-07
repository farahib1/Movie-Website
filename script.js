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
