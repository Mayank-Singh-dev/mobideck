import React from "react";
import { fetchHindianimation } from "../api/apigenre";
import Tempelate from "../Tempelate";

const HindiAnime = async () => {
  const hindiAnime = await fetchHindianimation();

  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        Hindi <p className="text-[#CCFF00]">Kids</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {hindiAnime.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow} showReleaseDate={false}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HindiAnime;
