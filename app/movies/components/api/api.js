async function fetchMoviesByReleaseYear(apiKey, releaseYear, language) {
    try {
      const baseUrl = "https://api.themoviedb.org/3";
      const region = "IN";
  
      const response = await fetch(
        `${baseUrl}/discover/movie?api_key=${apiKey}&region=${region}&sort_by=popularity.desc&page=1&primary_release_year=${releaseYear}&with_original_language=${language}`
      );
  
      const data = await response.json();
      const movies = data.results.slice(0, 5);
  
      const moviesWithRuntime = await Promise.all(
        movies.map(async (movie) => {
          const runtime = await fetchRuntime(apiKey, movie.id);
          return { ...movie, runtime };
        })
      );
  
      return moviesWithRuntime;
    } catch (error) {
      console.error(`Error fetching movies for year ${releaseYear} and language ${language}:`, error);
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
  
  async function fetchMoviesFrom2020To2023(language) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const years = Array.from({ length: 4 }, (_, index) => 2020 + index);
    const allMovies = [];
  
    for (const year of years) {
      const movies = await fetchMoviesByReleaseYear(apiKey, year, language);
      allMovies.push(...movies);
    }
  
    return allMovies;
  }
  
  export { fetchMoviesFrom2020To2023 };
  