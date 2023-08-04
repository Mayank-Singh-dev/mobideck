import Navbar from "@/app/components/Navbar";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

const loading = () => {
  return (
    <main>
      <Navbar />
      <div>
      {/* Backdrop Skeleton */}
      <div className="w-full h-[700px] bg-gray-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="flex flex-row items-start">
        {/* Poster Skeleton */}
        <div className="lg:w-[90%] lg:h-[90%] md:w-[60%] md:h-[60%] rounded-3xl bg-gray-200 animate-pulse" />

        {/* Info Skeleton */}
        <div className="text-white lg:w-[45%] md:w-[55%] h-auto ml-auto lg:mr-56 md:mr-5 lg:mt-80 md:mt-36 mt-36 cursor-default">
          <h1 className="font-homenaje font-bold uppercase text-2xl lg:text-4xl md:text-3xl text-[#CCFF00] lg:leading-[50px] md:leading-[50px] gap-10 ml-3 animate-pulse">
            Loading...
          </h1>
          <p className="font-homenaje font-medium lowercase text-xl md:text-2xl lg:text-2xl lg:leading-8 md:leading-8 leading-5 ml-3 mr-5 md:mr-0 lg:mr-0 animate-pulse">
            Loading...
          </p>

          {/* Genres Skeleton */}
          <div className="mt-4">
            <div className="flex flex-wrap justify-start">
              <span className="border-2 p-2 ml-3 mb-3 rounded-lg bg-gray-200 animate-pulse" />
              <span className="border-2 p-2 ml-3 mb-3 rounded-lg bg-gray-200 animate-pulse" />
              <span className="border-2 p-2 ml-3 mb-3 rounded-lg bg-gray-200 animate-pulse" />
              {/* Add more placeholders as needed */}
            </div>
          </div>

          {/* Dates and Rating Skeleton */}
          <div className="flex text-2xl lg:text-xl md:text-2xl">
            <p className="text-[#CCFF00] flex flex-row mt-3 ml-3 gap-2 animate-pulse">
              Loading...
            </p>
            <p className="text-[#CCFF00] flex flex-row mt-3 ml-14 gap-2 animate-pulse">
              Loading...
            </p>
          </div>

          {/* Runtimes and Season Information Skeleton */}
          <div className="text-xl lg:text-xl md:text-2xl text-[#CCFF00] flex">
            <span className="flex ml-2 mt-1 animate-pulse">
              Loading...
            </span>
          </div>

          <a href="#">
            <button className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-40 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
              Loading...
            </button>
          </a>
        </div>
      </div>

      {/* Cast Skeleton */}
      <div className="bg-black w-full h-full text-white font-homenaje pt-4">
        <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
          Top <p className="text-[#CCFF00]">Cast</p>
        </h1>

        <div className="pt-8 pl-5 font-homenaje" id="parentDiv">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="mb-4 w-[180px] md:w-[200px] md:h-auto min-w-[180px] md:min-w-[200px] rounded-3xl bg-gray-200 animate-pulse" />
            <div className="mb-4 w-[180px] md:w-[200px] md:h-auto min-w-[180px] md:min-w-[200px] rounded-3xl bg-gray-200 animate-pulse" />
            <div className="mb-4 w-[180px] md:w-[200px] md:h-auto min-w-[180px] md:min-w-[200px] rounded-3xl bg-gray-200 animate-pulse" />
            {/* Add more placeholders as needed */}
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default loading;
