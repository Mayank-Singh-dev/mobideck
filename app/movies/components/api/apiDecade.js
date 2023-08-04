async function fetchMoviesByReleaseYear(apiKey, releaseYear) {
    try {
      const baseUrl = "https://api.themoviedb.org/3";
      const language = "hi";
      const region = "IN";
  
      const response = await fetch(
        `${baseUrl}/discover/movie?api_key=${apiKey}&region=${region}&sort_by=popularity.desc&page=1&primary_release_year=${releaseYear}&with_original_language=${language}`
      );
  
      const data = await response.json();
      const movies = data.results.slice(0, 2);
  
      const runtimePromises = movies.map(async (movie) => {
        try {
          const runtime = await fetchRuntime(apiKey, movie.id);
          return { ...movie, runtime };
        } catch (error) {
          return movie;
        }
      });
  
      const moviesWithRuntime = await Promise.allSettled(runtimePromises);
  
      const fulfilledMovies = moviesWithRuntime
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
  
      return fulfilledMovies;
    } catch (error) {
      console.error(`Error fetching movies for year ${releaseYear}:`, error);
      return [];
    }
  }
  
  async function fetchRuntime(apiKey, movieId) {
    try {
      const baseUrl = "https://api.themoviedb.org/3";
      const response = await fetch(
        `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
      );
      const data = await response.json();
      return data.runtime;
    } catch (error) {
      console.error(
        `Error fetching runtime for movie with ID ${movieId}:`,
        error.message
      );
      throw error;
    }
  }
  
  async function fetchMoviesForSpecificYear(releaseYear) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const years = Array.from({ length: 11 }, (_, index) => releaseYear + index);
    const allMovies = [];
  
    for (const year of years) {
      const movies = await fetchMoviesByReleaseYear(apiKey, year);
      allMovies.push(...movies);
    }
  
    return allMovies;
  }
  
  export { fetchMoviesForSpecificYear };
  