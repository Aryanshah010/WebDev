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
let toast = document.querySelector(".toast");

function showToast(message) {
  toast.classList.remove("hidden");
  toast.textContent = message;
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 400);
  }, 3000);
}

async function fetchMovie(movieName) {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=be981bc2&t=${movieName}`
    );
    if (!response.ok) {
      showToast(`HTTP error: ${response.status}`);
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
    showToast("Please provide proper movie name");
    return;
  }

  try {
    const movieData = await fetchMovie(movieName);
    if (movieData.Response === "False") {
      showToast("Movie not found!");
      movieContainer.classList.add("hidden");
      return;
    }

    genres.innerHTML = "";
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
    language.textContent = movieData.Language.split(",")[0];
    searchInp.value = "";
  } catch (error) {
    showToast("Something went wrong");
  }
}

searchInp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});
