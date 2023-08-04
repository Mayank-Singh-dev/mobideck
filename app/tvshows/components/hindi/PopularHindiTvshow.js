import React from 'react'
import { fetchPopularTvShowHindi } from '../api/api'
import Tempelate from '../Tempelate'

const PopularHindiTvshow = async() => {
    const TvshowsHindi=await fetchPopularTvShowHindi()
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
    <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
      Popular <p className="text-[#CCFF00]">Hindi</p>
    </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {TvshowsHindi.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow}/>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularHindiTvshow