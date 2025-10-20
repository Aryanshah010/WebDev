let searchInp = document.querySelector("#searchMovie");
let movieContainer = document.querySelector(".movie-container");
let moviePic = document.querySelector("#posterMovie");
let ratingValue = document.querySelector("#ratingValue");
let movieTitle = document.querySelector("#movieTitle");
let duration = document.querySelector("#duration");
let genres = document.querySelector(".genres");
let director = document.querySelector("#director");
let writers = document.querySelector("#writers");
let Stars = document.querySelector("#stars");
let releaseDate = document.querySelector(".release-date");
let language = document.querySelector("#language");

async function fetchMovie(movieName) {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=be981bc2&t=${movieName}`
    );
    if (!response.ok) {
      errorMsg.textContent = `HTTP error: ${response.status}`;
      throw new Error(`HTTP error: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

async function searchMovie() {
  let movieName = searchInp.value.trim();

  if (!movieName) {
    return;
  }

  try {
    const movieData = await fetchMovie(movieName);
    if (movieData.response === "False") {
      console.warn("Movie not found");
      return;
    }

    console.log(movieData);
    movieContainer.classList.remove("hidden");
    moviePic.src = movieData.Poster;
    ratingValue.textContent = movieData.imdbRating;
    movieTitle.textContent = movieData.Title;
    duration.textContent = movieData.Runtime;
    movieData.Genre.split(",").forEach((genre) => {
      let genrelists = document.createElement("li");
      genrelists.classList.add("genreList");
      genrelists.textContent = genre.trim();
      genres.appendChild(genrelists);
    });
    director.textContent = movieData.Director;
    writers.textContent = movieData.Writer;
    Stars.textContent = movieData.Actors;
    releaseDate.textContent = movieData.Released;

    let movieLanguage = movieData.Language.split(",");
    let lang = movieLanguage[0];
    language.textContent = lang;
    searchInp.value = "";
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}

searchInp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});
