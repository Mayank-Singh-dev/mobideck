
import MoviePoster from "./components/MoviePoster";
import PopularMovies from "./components/PopularMovies";
import PopularTvShows from "./components/PopularTvShows";

export default function Home() {
  return (
    <main className="relative">
      <MoviePoster/>
      <PopularMovies/>
      <PopularTvShows/>
    </main>
  );
}