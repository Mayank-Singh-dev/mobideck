import React from "react";
import { fetchEnglishanimation } from "../api/apigenre";
import Tempelate from "../Tempelate";

const EnglishAnime = async () => {
  const engAnimes = await fetchEnglishanimation();

  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        English <p className="text-[#CCFF00]">Animation</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {engAnimes.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishAnime;
