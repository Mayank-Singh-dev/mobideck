const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const fetchDetails = async (media_type, id) => {
  if (media_type == "tv") {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      const backdropPath = data.backdrop_path;
      const Dates = data.first_air_date;
      const generes = data.genres;
      const idss = data.id;
      const title = data.name;
      const poster = data.poster_path;
      const overview = data.overview;
      const rating = data.vote_average;
      const seasonsData = data.seasons;
      const trailer = await fetchTvtrailer(idss);
      const cast = await fetchTvCast(idss);

      return {
        backdropPath,
        Dates,
        generes,
        idss,
        title,
        poster,
        overview,
        rating,
        seasonsData,
        trailer,
        cast,
      };
    } catch (error) {
      console.error("Error fetching movie data:", error.message);
      throw error;
    }
  } else if (media_type == "movie") {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      const backdropPath = data.backdrop_path;
      const Dates = data.release_date;
      const generes = data.genres;
      const idss = data.id;
      const title = data.title;
      const poster = data.poster_path;
      const overview = data.overview;
      const rating = data.vote_average;
      const runtimes = data.runtime;
      const trailer = await fetchMovieTrailer(idss);
      const cast = await fetchmovieCast(idss);

      return {
        backdropPath,
        Dates,
        generes,
        idss,
        title,
        poster,
        overview,
        rating,
        runtimes,
        trailer,
        cast,
      };
    } catch (error) {
      console.error("Error fetching movie data:", error.message);
      throw error;
    }
  }
};

const fetchMovieTrailer = async (id) => {
  try {
    const movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );
    const videoData = await movieTrailer.json();
    const trailers = videoData.results;
    const firstTrailer = trailers.find((trailer) => trailer.type === "Trailer");
    return firstTrailer;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
};

const fetchTvtrailer = async (id) => {
  try {
    const TvTrailer = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`
    );
    const videoData = await TvTrailer.json();
    const trailers = videoData.results;
    const firstTrailer = trailers.find((trailer) => trailer.type === "Trailer");
    return firstTrailer;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
};
const fetchmovieCast = async (id) => {
  try {
    const movieCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    );
    const data = await movieCast.json();
    const datacast = data.cast;
    return datacast;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
};
const fetchTvCast = async (id) => {
  try {
    const tvCast = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`
    );
    const data = await tvCast.json();
    const datacast = data.cast;
    return datacast;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
};

export { fetchDetails };
