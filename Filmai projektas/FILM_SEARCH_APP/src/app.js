document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movie-search-form');
    const searchInput = document.getElementById('movie-search');
    const resultsContainer = document.getElementById('movie-results');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            fetchMovies(searchTerm);
        }
    });

    async function fetchMovies(searchTerm) {
        const apiKey = '95b24de3';
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
        const data = await response.json();
        if (data.Response === 'True') {
            displayMovies(data.Search);
        }
    }

    function displayMovies(movies) {
        resultsContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col-md-3', 'mb-3');
            movieCard.innerHTML = `
                <div class="card movie-card">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">Metai: ${movie.Year}</p>
                        <button class="btn-center" onclick="showMovieDetails('${movie.imdbID}')">Daugiau informacijos</button>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(movieCard);
        });
    }

    window.showMovieDetails = function (imdbID) {
        window.open(`movie-details.html?id=${imdbID}`, '_blank');
    };
});