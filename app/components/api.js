async function fetchPopular(choice) {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/${choice}/popular?api_key=${apiKey}&page=1`;
      const movieres = await fetch(url);
      return movieres.json();
    } catch (error) {
      console.error("Error fetching popular movies:", error.message);
    }
  }

  async function fetchMovieTrailers(apiKey, movieId) {
    const baseUrl = "https://api.themoviedb.org/3";
    const videoResponse = await fetch(
      `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`
    );
    const videoData = await videoResponse.json();
    const trailers = videoData.results;
    const firstTrailer = trailers.find((trailer) => trailer.type === "Trailer");
    return firstTrailer;
  }
  
  async function fetchDataofPoster() {
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const baseUrl = "https://api.themoviedb.org/3";
      const movieResponse = await fetch(
        `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_date.gte=2023-01-01&page=1&vote_count.gte=100`
      );
      const movieData = await movieResponse.json();
  
      const popularMovies = movieData.results.slice(0, 20);
      const movieTrailers = await Promise.all(
        popularMovies.map(async (movie) => {
          const trailer = await fetchMovieTrailers(apiKey, movie.id);
          return { ...movie, trailer };
        })
      );
  
      return movieTrailers;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      return [];
    }
  }
  export {fetchPopular, fetchDataofPoster}