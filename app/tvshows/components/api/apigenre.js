const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const hindiurl =
  "https://api.themoviedb.org/3/discover/tv?&language=en-US&with_original_language=hi";
const englishurl =
  "https://api.themoviedb.org/3/discover/tv?&language=en-US&with_original_language=en";

async function fetchpopularTvshow(apikey, url, genre_id) {
  try {
    const data = await fetch(
      `${url}&with_genres=${genre_id}&api_key=${apiKey}`
    );
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
//anime
async function fetchEnglishanimation() {
  const url = englishurl;
  const genre_id = 16;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
async function fetchHindianimation() {
  const url = hindiurl;
  const genre_id = 16;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//comedy
async function fetchHindiComedy() {
  const url = hindiurl;
  const genre_id = 35;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
async function fetchEnglishComedy() {
  const url = englishurl;
  const genre_id = 35;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//crime
async function fetchEnglishCrime() {
  const url = englishurl;
  const genre_id = 80;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
async function fetchHindiCrime() {
  const url = hindiurl;
  const genre_id = 80;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//Documentry
async function fetchEnglishDocumentry() {
  const url = englishurl;
  const genre_id = 99;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
async function fetchHindiDocumentry() {
  const url = hindiurl;
  const genre_id = 99;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//Drama
async function fetchEnglishDrama() {
  const url = englishurl;
  const genre_id = 18;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//Family
async function fetchEnglishFamily() {
  const url = englishurl;
  const genre_id = 10751;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//history
async function fetchEnglishHistory() {
  const url = englishurl;
  const genre_id = 36;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}

//music
async function fetchEnglishmusic() {
  const url = englishurl;
  const genre_id = 10402;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
//mystrey
async function fetchEnglishmystrey() {
  const url = englishurl;
  const genre_id = 9648;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
//romance
async function fetchEnglishromance() {
  const url = englishurl;
  const genre_id = 10749;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
//Western
async function fetchEnglishwestern() {
  const url = englishurl;
  const genre_id = 37;
  return await fetchpopularTvshow(apiKey, url, genre_id);
}
export {
  fetchEnglishanimation,
  fetchHindianimation,
  fetchEnglishComedy,
  fetchHindiComedy,
  fetchEnglishCrime,
  fetchHindiCrime,
  fetchEnglishDocumentry,
  fetchHindiDocumentry,
  fetchEnglishDrama,
  fetchEnglishFamily,
  fetchEnglishHistory,
  fetchEnglishmusic,
  fetchEnglishmystrey,
  fetchEnglishromance,
  fetchEnglishwestern,
};
