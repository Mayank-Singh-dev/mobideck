import React from "react";
import Tempelate from "../Tempelate";
import { fetchEnglishHistory } from "../api/apigenre";

const EnglishHistory = async () => {
  const engHistory = await fetchEnglishHistory();
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
      <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
        English <p className="text-[#CCFF00]">History</p>
      </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {engHistory.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishHistory;
