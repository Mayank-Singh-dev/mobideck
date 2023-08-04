export const metadata={
  title:"tvShow"
}

import React from "react";
import { EnglisDrama, EnglishAnime, EnglishCrime, EnglishDoc, EnglishFamily, EnglishHistory, EnglishMystrey, EnglishRomance, EnglishWestern, Englishcomedy, HindiAnime, HindiComedy, HindiCrime, HindiDoc, PopularHindiTvshow, PopularTVshow, } from './components/index'
import EnglishMusic from "./components/english/EnglishMusic";


const TvMovie = () => {
  return (
    <div className=" bg-black h-auto text-white pt-[100px] ">
      <PopularTVshow />
      <EnglisDrama />
      <EnglishMystrey />
      <EnglishCrime />
      <Englishcomedy />
      <EnglishRomance />
      <EnglishFamily />
      <EnglishDoc />
      <PopularHindiTvshow />
      <HindiDoc />
      <HindiComedy />
      <HindiCrime />
      <EnglishAnime />
      <HindiAnime />
      <EnglishMusic />
      <EnglishHistory />
      <EnglishWestern />
    </div>
  );
};

export default TvMovie;
