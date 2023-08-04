const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const fetchforsearched = async (searchquery) => {
      try {
        const url = "https://api.themoviedb.org/3/search/multi?";
        const response = await fetch(
          `${url}&query=${searchquery}&api_key=${apiKey}`
        );
        const data = await response.json();
        const details = await Promise.all(
          data.results.map(async (item) => {
            if (item.media_type === "movie") {
              const runtime = await fetchmovieRuntime(apiKey, item.id);
              return { ...item, runtime };
            } else if (item.media_type === "tv") {
              const seasons = await fetchTvSeason(apiKey, item.id);
              return { ...item, seasons };
            } else {
              return item;
            }
          })
        );
        return details;
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        return [];
      }
    };

    const fetchmovieRuntime = async (apiKey, movieId) => {
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
    };

    const fetchTvSeason = async (apiKey, TvId) => {
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
    };

    export {fetchforsearched}