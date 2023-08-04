import React from "react";
import Tempelate from "./Tempelate";
import { fetchMoviesForSpecificYear } from "./api/apiDecade";

const BollywoodClasic = async () => {
  const releaseYear = 1980;
  const PopsClasic = await fetchMoviesForSpecificYear(releaseYear);
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        Bollywood <p className="text-[#CCFF00]">Clasic</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {PopsClasic.map((movie) => (
            <Tempelate key={movie?.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BollywoodClasic;
