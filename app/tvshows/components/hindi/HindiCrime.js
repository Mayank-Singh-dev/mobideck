import React from 'react'
import { fetchHindiCrime } from '../api/apigenre'
import Tempelate from '../Tempelate'

const HindiCrime = async() => {
    const HindiCrime=await fetchHindiCrime()
  return (
    <div className="bg-black w-full h-full text-white font-homenaje">
    <h1 className="flex gap-2 font-homenaje font-semiboldbold text-3xl uppercase justify-center">
      Hindi <p className="text-[#CCFF00]">Crime</p>
    </h1>

      <div class="pt-8 pl-5 overflow-x-auto" id="parentDiv">
        <div class="flex gap-4">
          {HindiCrime.map((tvShow) => (
            <Tempelate key={tvShow?.id} tvShow={tvShow}/>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default HindiCrime