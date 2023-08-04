import Link from "next/link";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { fetchPopular } from "./api";

const PopularTvShows = async () => {
  const choice="tv"
  const PopularTv = await fetchPopular(choice);

  return (
    <div className="bg-black w-full h-full text-white pt-10">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        Popular <p className="text-[#CCFF00]">Tv shows</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {PopularTv.results.map((tvShow) => (
            <div
              key={tvShow.id}
              className="mb-4 w-[230px] md:w-auto md:h-auto min-w-[230px] md:min-w-[270px] rounded-3xl transition-shadow hover:shadow-glow hover:border-[#CCFF00] transition-border duration-500 hover:scale-105"
            >
              <img
                className="w-[230px] h-[300px] md:w-[270px] md:h-[400px] max-h-full rounded-3xl "
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt="movie poster"
              />
              <div className="flex">
                <p className="text-xl ml-3 font-homenaje font-semibold  uppercase leading-10">
                  {tvShow.name}
                </p>
              </div>
              <Link href={`/moviedek/${tvShow.name}?mediatype=tv&id=${tvShow.id}`}>
              <button className="bg-gray-600 border-2 font-homenaje text-lg border-[#CCFF00] w-32 h-10 rounded-3xl ml-2 mb-2 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
                More Info
              </button>
              </Link>
            </div>
          ))}
          <Link href="/tvshows">
          <button className="flex justify-center items-center bg-gray-600 border-2 font-homenaje min-w-[170px] mt-40 h-12 text-xl border-[#CCFF00]  rounded-3xl  ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
            View More
            <AiOutlineDoubleRight className="mt-1 ml-2"/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularTvShows;
