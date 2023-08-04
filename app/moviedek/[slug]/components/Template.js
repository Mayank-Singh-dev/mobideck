"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { fetchDetails } from "./api";
import { SlCalender } from "react-icons/sl";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";

const Template = async () => {
  const searchParams = useSearchParams();
  const mediatypes = searchParams.get("mediatype");
  const ids = searchParams.get("id");
  const Datas = await fetchDetails(mediatypes, ids);

  return (
    <div key={Datas?.idss}>
      <div className="relative">
        <div className="w-full lg:h-full object-cover md:h-[900px] h-[700px] relative">
          {Datas?.backdropPath ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${Datas?.backdropPath}`}
              alt="Poster"
              className="w-full lg:h-full object-cover md:h-[1000px] h-[700px] relative"
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
                src={`https://image.tmdb.org/t/p/w500/${Datas?.poster}`}
                alt="overlay"
              />
            </div>
            <div className="text-white  lg:w-[45%] md:w-[55%] h-auto ml-auto lg:mr-56 md:mr-5 lg:mt-80 md:mt-36 mt-36 cursor-default bg-black pt-8 pb-8 bg-opacity-60 md:bg-opacity-60 lg:bg-opacity-40 rounded-3xl backdrop-blur-sm transition-shadow hover:shadow-glow hover:border-[#CCFF00]">
              <h1 className="font-homenaje font-bold uppercase text-2xl lg:text-4xl md:text-3xl text-[#CCFF00] lg:leading-[50px] md:leading-[50px] gap-10 ml-3 ">
                {Datas?.title}
              </h1>
              <p className="font-homenaje font-medium lowercase text-xl md:text-2xl lg:text-2xl lg:leading-8 md:leading-8 leading-5  ml-3 mr-5 md:mr-0 lg:mr-0">
                {Datas?.overview}
              </p>

              <div className="mt-4">
                <div className="hidden md:flex flex-wrap justify-start">
                  {Datas?.generes.map((genreId) => (
                    <span
                      key={genreId}
                      className="border-2 p-2 ml-3 mb-3 rounded-lg transition-shadow hover:shadow-glow hover:border-[#CCFF00]"
                    >
                      {genreId?.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex text-2xl lg:text-xl md:text-2xl">
                <p className="text-[#CCFF00] flex flex-row mt-3 ml-3 gap-2">
                  <SlCalender className="mt-1" />
                  {Datas?.Dates}
                </p>
                <p className="text-[#CCFF00] flex flex-row mt-3 ml-14 gap-2">
                  <AiFillStar className="mt-1 " />
                  {Datas.rating?.toFixed(1) || "N/A"}
                </p>
              </div>
              <div className="text-xl lg:text-xl md:text-2xl text-[#CCFF00] flex">
                <span className="flex ml-2  mt-1">
                  {Datas.runtimes ? (
                    <>
                      <AiOutlineClockCircle className="mt-1 mr-1" />
                      {Datas.runtimes} min
                    </>
                  ) : Datas.seasonsData?.length ? (
                    <div className="flex text-lg ml-2">
                      {Datas.seasonsData.length} Season
                      {Datas.seasonsData.length === 1 ? "" : "s"}
                      <p className="ml-24">
                        Epoisode Count:{" "}
                        {Datas.seasonsData
                          .map((season) => season.episode_count)
                          .reduce((acc, curr) => acc + curr, 0)}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${Datas.trailer?.key}`}
                target="_blank"
              >
                <button className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-40 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
                  Watch Trailer
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-full text-white font-homenaje pt-[135px] md:pt-[135px] lg:pt-[45px]">
        <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
          Top <p className="text-[#CCFF00]">Cast</p>
        </h1>

        <div class="pt-8 pl-5 font-homenaje" id="parentDiv">
          <div class="flex flex-wrap gap-6 justify-center">
            {Datas.cast?.map((castMember) => (
              <div
                key={castMember?.id}
                className="mb-4 w-[180px] md:w-[200px] md:h-auto min-w-[180px] md:min-w-[200px] rounded-3xl transition-shadow hover:shadow-glow hover:border-[#CCFF00] transition-border duration-200 hover:scale-105"
              >
                <Image
                  className="w-[180px] h-[200px] md:w-[200px] md:h-[300px] max-h-full rounded-3xl "
                  src={`https://image.tmdb.org/t/p/original/${castMember?.profile_path}`}
                  width={500}
                  height={300}
                  alt="ALT"
                />
                <p className="mt-2 text-[20px] ml-3 font-medium leading-10 flex justify-center">
                  {castMember?.name}
                </p>
                <p className="text-[18px] text-gray-400 ml-3 flex justify-center">
                  as
                </p>
                <p className="text-[#CCFF00] ml-3  text-[19px] flex justify-center">
                  {castMember?.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
