
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

async function fetchMovieData(apiKey, url) {
  try {
    const response = await fetch(`${url}&api_key=${apiKey}`);
    const data = await response.json();
    const moviesWithRuntime = await Promise.all(
      data.results.map(async (movie) => {
        const runtime = await fetchpopData(apiKey, movie.id);
        return { ...movie, runtime };
      })
    );
    return moviesWithRuntime;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
}

async function fetchpopData(apiKey, movieId) {
  try {
    const baseUrl = "https://api.themoviedb.org/3";
    const runtimeresponse = await fetch(
      `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
    );
    const runtimeData = await runtimeresponse.json();
    return runtimeData.runtime;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
}

async function fetchPopularMovies() {
  const url = "https://api.themoviedb.org/3/movie/popular?page=1";
  return await fetchMovieData(apiKey, url);
}

async function fetchPopularMoviesHindi() {
  const url = "https://api.themoviedb.org/3/discover/movie?region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi";
  return await fetchMovieData(apiKey, url);
}

export {
  fetchPopularMovies,
  fetchPopularMoviesHindi
};
