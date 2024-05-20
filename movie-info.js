document.addEventListener('DOMContentLoaded', () => {
  //  movie title from  URL
  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get('title');

  // find movie data from categories
  let movieData;
  for (const category in categories) {
      movieData = categories[category].find(movie => movie.title === movieTitle);
      if (movieData) break;
  }

  //  movie info container 
  const movieInfoContainer = document.getElementById('movie-info-container');

  if (movieData) {
      // populate  movie info
      movieInfoContainer.innerHTML = `
          <div class="movie-info-card">
              <img src="${movieData.imgSrc}" alt="${movieData.title}">
              <div class="movie-info-details">
                  <h2>${movieData.title}</h2>
                  <p><strong>IMDb:</strong> ${movieData.imdbRating}</p>
                  <p><strong>Year:</strong> ${movieData.year}</p>
                  <p><strong>Duration:</strong> ${movieData.duration}</p>
                  <p><strong>Description:</strong> ${movieData.description}</p>
                  <p><strong>Country:</strong> ${movieData.country}</p>
                  <p><strong>Genre:</strong> ${movieData.genre}</p>
                  <p><strong>Director:</strong> ${movieData.director}</p>
                  <p><strong>Writer:</strong> ${movieData.writer}</p>
                  <p><strong>Actors:</strong> ${movieData.actors}</p>
                  <a class="watch-movie" href="${movieData.link}">Watch Movie</a>
              </div>
          </div>
      `;
  } else {
      movieInfoContainer.innerHTML = '<p>Movie not found.</p>';
  }

  //  review submission
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const reviewerName = document.getElementById('reviewer-name').value;
      const review = document.getElementById('review').value;

      
      
      console.log(`Review by ${reviewerName}: ${review}`);
      alert('Review submitted!');

      reviewForm.reset();
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
          console.log(`Rating: ${selectedRating}`);
      } else {
          alert('Please select a rating.');
      }
  });
});
