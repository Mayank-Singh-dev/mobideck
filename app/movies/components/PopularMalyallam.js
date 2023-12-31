import React from "react";
import Tempelate from "./Tempelate";
import { fetchMoviesFrom2020To2023 } from "./api/api";

const PopularMalyallam = async () => {
  const language="ml"
  const popsMalyallam = await fetchMoviesFrom2020To2023(language);
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        Popular <p className="text-[#CCFF00]">malayalam</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {popsMalyallam.map((movie) => (
            <Tempelate key={movie?.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMalyallam;
