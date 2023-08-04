import React from "react";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle, AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Tempelate = ({ movie }) => {
  return (
    <div
      key={movie?.id}
      className="mb-4 w-[230px] md:w-auto md:h-auto min-w-[230px] md:min-w-[270px] rounded-3xl transition-shadow hover:shadow-glow hover:border-[#CCFF00] transition-border duration-500 hover:scale-105"
    >
      <Image
        className="w-[230px] h-[300px] md:w-[270px] md:h-[400px] max-h-full rounded-3xl "
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt="movie poster"
        width={500}
        height={300}
      />
      <div>
        <p className="text-xl ml-3 font-homenaje font-semibold  uppercase leading-10">
          {movie?.title}
        </p>
        <div className="flex text-[#CCFF00] ml-3 mb-3 text-lg">
          <span className="flex">
            <SlCalender className="mt-1 mr-1" />
            {movie?.release_date.substring(0, 4)}
          </span>
          <span className="flex ml-auto mr-3">
            <AiOutlineClockCircle className="mt-1 mr-1" />
            {movie?.runtime}min
          </span>
        </div>
        <div className="flex">
          <Link href={`/moviedek/${movie?.title}?mediatype=movie&id=${movie?.id}`}>
          <button className="bg-gray-600 border-2 font-homenaje text-lg border-[#CCFF00] w-32 h-10 rounded-3xl ml-2 mb-2 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
            More Info
          </button>
          </Link>
          <span className="flex text-[#CCFF00] ml-auto mr-3 text-lg">
            <AiFillStar className="mt-1 mr-1 " />
            {movie?.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tempelate;
