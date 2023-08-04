import React from "react";
import Tempelate from "../Tempelate";
import { fetchHindiComedy } from "../api/apigenre";

const HindiComedy = async () => {
  const hindiCom = await fetchHindiComedy();
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        Hindi <p className="text-[#CCFF00]">Comedy</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {hindiCom.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HindiComedy;
