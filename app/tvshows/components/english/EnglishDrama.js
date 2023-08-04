import React from "react";
import { fetchEnglishDrama } from "../api/apigenre";
import Tempelate from "../Tempelate";

const EnglishDrama = async () => {
  const engdrama = await fetchEnglishDrama();
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        English <p className="text-[#CCFF00]">Drama</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {engdrama.map((tvShow) => (
            <Tempelate key={tvShow.id} tvShow={tvShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishDrama;
