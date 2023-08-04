"use client";

import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import Loading from "../loading";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const MovieSlider = ({ mainposts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const datass = mainposts;
  const idofboy = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    Science_Fiction: 878,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  useEffect(() => {
    if (datass.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datass.length);
      }, 10000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [datass]);

  if (datass.length === 0) {
    return <Loading />;
  }

  const currentData = datass[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datass.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datass.length);
  };

  return (
    <div className="relative">
      <div className="w-full lg:h-full object-cover md:h-[900px] h-[700px] relative">
        {currentData.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${currentData.backdrop_path}`}
            alt="Poster"
            className="w-full lg:h-full object-cover md:h-[900px] h-[700px] relative"
          />
        ) : (
          <div className="w-full lg:h-[1000px] object-cover md:h-[900px] h-[700px] bg-black" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
        <div className="flex flex-row">
          <div className="absolute top-0 left-0 mt-52 lg:ml-52 md:mt-72 md:ml-4">
            <img
              className="lg:w-[90%] lg:h-[90%] md:w-[60%] md:h-[60%] rounded-3xl hidden md:block transition-shadow hover:shadow-glow hover:border-[#CCFF00]"
              src={`https://image.tmdb.org/t/p/w500/${currentData.poster_path}`}
              alt="overlay"
            />
          </div>
          <div className="text-white  lg:w-[45%] md:w-[55%] h-auto ml-auto lg:mr-56 md:mr-5 lg:mt-80 md:mt-36 mt-36 cursor-default bg-black pt-8 pb-8  bg-opacity-60 md:bg-opacity-60 lg:bg-opacity-40 rounded-3xl backdrop-blur-sm transition-shadow hover:shadow-glow hover:border-[#CCFF00]">
            <h1 className="font-homenaje font-bold uppercase text-2xl lg:text-4xl md:text-3xl text-[#CCFF00] lg:leading-[50px] md:leading-[50px] gap-10 ml-3 ">
              {currentData.original_title}
            </h1>
            <p className="font-homenaje font-medium lowercase text-xl md:text-[25px] lg:text-2xl lg:leading-8 md:leading-8 leading-5  ml-3 mr-5 md:mr-0 lg:mr-0">
              {currentData.overview}
            </p>

            <div className="mt-4">
              <div className="hidden md:flex flex-wrap justify-start">
                {currentData.genre_ids.map((genreId) => (
                  <span
                    key={genreId}
                    className="border-2 p-2 ml-3 mb-3 rounded-lg transition-shadow hover:shadow-glow hover:border-[#CCFF00]"
                  >
                    {Object.keys(idofboy).find(
                      (key) => idofboy[key] === genreId
                    )}{" "}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[#CCFF00] flex flex-row mt-3 ml-3 gap-2">
              <SlCalender className="mt-1" />
              {currentData.release_date}
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${currentData.trailer.key}`}
              target="_blank"
            >
              <button className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-40 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
                Watch Trailer
              </button>
            </a>
            <div>
              <button
                className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-[40px] pl-2 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
                onClick={goToPrevious}
              >
                <AiOutlineDoubleLeft />
              </button>

              <button
                className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-[40px] pl-2 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
                onClick={goToNext}
              >
                <AiOutlineDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;

