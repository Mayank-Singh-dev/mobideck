import React from "react";
import Navbar from "./components/Navbar";

const Loading = () => {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <div className="w-full h-[700px] bg-gray-200 animate-pulse" />
        <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
          <div className="flex flex-row">
            <div className="absolute top-0 left-0 mt-52 lg:ml-52 md:mt-72 md:ml-4">
              <div className="bg-gray-200 lg:w-[90%] lg:h-[90%] md:w-[60%] md:h-[60%] rounded-3xl hidden md:block" />
            </div>
            <div className="text-white lg:w-[45%] md:w-[55%] h-auto ml-auto lg:mr-56 md:mr-5 lg:mt-80 md:mt-36 mt-36 cursor-default">
              <h1 className="font-homenaje font-bold uppercase text-2xl lg:text-4xl md:text-3xl text-[#CCFF00] lg:leading-[50px] md:leading-[50px] gap-10 ml-3 bg-gray-200 h-8 w-3/4 mb-3" />
              <p className="font-homenaje font-medium lowercase text-xl md:text-2xl lg:text-2xl lg:leading-8 md:leading-8 leading-5 ml-3 mr-5 md:mr-0 lg:mr-0 bg-gray-200 h-5 w-full mb-3" />

              <p className="text-[#CCFF00] flex flex-row mt-3 ml-3 gap-2">
                <span className="bg-gray-200 h-5 w-5 rounded-full" />
                <span className="bg-gray-200 h-5 w-20" />
              </p>
              <button
                className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-40 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:scale-105 active:scale-95"
                disabled
              ></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
