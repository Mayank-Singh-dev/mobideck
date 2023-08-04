"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { fetchforsearched } from "./api";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";

const SearchCard = async () => {
  const searchParams = useSearchParams();
  const querys = searchParams.get("query");
  const searchData = await fetchforsearched(querys);

  return (
    <div className="bg-black w-full h-full text-white font-homenaje pb-[800px] pt-[50px]">
      {searchData.length === 0 ? (
        <h1 className="flex gap-2 font-homenaje text-xl md:text-3xl uppercase justify-center">
          No match found for <p className="text-[#CCFF00]">{querys}</p>
        </h1>
      ) : (
        <h1 className="flex gap-2 font-homenaje  text-xl md:text-3xl uppercase justify-center">
          Results for <p className="text-[#CCFF00]">{querys}</p>
        </h1>
      )}

      {searchData.length > 0 && (
        <div class="pt-8 pl-5" id="parentDiv">
          <div class="flex flex-wrap gap-6 justify-center">
            {searchData.map((item) => (
              <div
                key={item?.id}
                className="mb-4 w-[230px] md:w-[270px] md:h-auto min-w-[230px] md:min-w-[270px] rounded-3xl transition-shadow hover:shadow-glow hover:border-[#CCFF00] transition-border duration-500 hover:scale-100"
              >
                <Image
                  className="w-[230px] h-[300px] md:w-[270px] md:h-[400px] max-h-full rounded-3xl "
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt="movie poster"
                  width={500}
                  height={300}
                />
                <div>
                  <p className="text-xl ml-3 font-homenaje font-semibold  uppercase leading-10">
                    {item?.title || item?.name}
                  </p>
                  <div className="flex text-[#CCFF00] ml-3 mb-3 text-lg">
                    <span className="flex">
                      <SlCalender className="mt-1 mr-1" />
                      {item?.first_air_date?.substring(0, 4) ||
                        item?.release_date?.substring(0, 4)}
                    </span>

                    <span className="flex ml-auto mr-3">
                      {item?.runtime ? (
                        <>
                          <AiOutlineClockCircle className="mt-1 mr-1" />
                          {item?.runtime} min
                        </>
                      ) : item.seasons?.length ? (
                        <>
                          {item?.seasons.length} Season
                          {item?.seasons.length === 1 ? "" : "s"}
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <Link
                      href={`/moviedek/${item.name || item.title}?mediatype=${
                        item.media_type
                      }&id=${item.id}`}
                    >
                      <button className="bg-gray-600 border-2 font-homenaje text-lg border-[#CCFF00] w-32 h-10 rounded-3xl ml-2 mb-2 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95">
                        More Info
                      </button>
                    </Link>
                    <span className="flex text-[#CCFF00] ml-auto mr-3 text-lg">
                      <AiFillStar className="mt-1 mr-1 " />
                      {item.vote_average?.toFixed(1) || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCard;
