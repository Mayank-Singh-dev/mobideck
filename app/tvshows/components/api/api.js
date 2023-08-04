const apiKey = process.env.NEXT_PUBLIC_API_KEY;

async function fetchpopularTvshow(apikey, url) {
  try {
    const data = await fetch(`${url}&api_key=${apiKey}`);
    const TvData = await data.json();

    const TvDetails = await Promise.all(
      TvData.results.map(async (Tvshow) => {
        const seasons = await fetchpopData(apiKey, Tvshow.id);
        return { ...Tvshow, seasons };
      })
    );
    return TvDetails;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return [];
  }
}

async function fetchpopData(apiKey, TvId) {
  try {
    const seasonsResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`
    );
    const seasonData = await seasonsResponse.json();
    return seasonData.seasons;
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    throw error;
  }
}

async function fetchPopularTvshow() {
  const url =
    "https://api.themoviedb.org/3/discover/tv?&first_air_date.gte=2022-01-01&with_original_language=en";
  return await fetchpopularTvshow(apiKey, url);
}

async function fetchPopularTvShowHindi() {
  const url =
    "https://api.themoviedb.org/3/discover/tv?&first_air_date.gte=2021-01-01&with_original_language=hi";
  return await fetchpopularTvshow(apiKey, url);
}

export { fetchPopularTvshow, fetchPopularTvShowHindi };
