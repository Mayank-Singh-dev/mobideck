export const metadata={
  title:"movie"
}
import React from "react";
import { BollywoodClasic, BollywoodNinteys, PopularHindi, PopularKannada, PopularLastDecade, PopularMalyallam, PopularMovie, PopularTamil, PopularTelegu } from "./components";


const Movie = () => {
  return (
    <div className="bg-black h-auto text-white pt-[100px] ">
      <PopularMovie />
      <PopularHindi/>
      <PopularLastDecade/>
      <BollywoodClasic/>
      <BollywoodNinteys/>
      <PopularKannada/>
      <PopularTelegu/>
      <PopularMalyallam/>
      <PopularTamil/>
    </div>
  );
};

export default Movie;
