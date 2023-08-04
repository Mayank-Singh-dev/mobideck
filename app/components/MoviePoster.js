import React from "react";
import MovieSlider from "./MovieSlider";
import { fetchDataofPoster } from "./api";


const MoviePoster = async () => {
  const mainposts = await fetchDataofPoster();

  return <MovieSlider mainposts={mainposts} />;
};

export default MoviePoster;
