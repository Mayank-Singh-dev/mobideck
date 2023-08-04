"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logos from "../../public/assets/magnet.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(
    "lg:bg-black lg:bg-opacity-30 lg:backdrop-blur-sm md:bg-black bg-black"
  );
  const [navVisible, setNavVisible] = useState(false);
  const [inputData, setInputData] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleNav = () => {
    setNavVisible(!navVisible);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim() !== "") {
      window.location.href = `/search?query=${inputData}`;
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavBackground("lg:bg-black");
      } else {
        setNavBackground("lg:bg-black lg:bg-opacity-30 lg:backdrop-blur-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`text-white p-5 font-bacasime-antique flex ${navBackground} md:bg-black bg-black `}
      >
        <Link href="/" className="text-[29px] cursor-pointer flex">
          <Image
            className="mr-2"
            src={logos}
            alt="logo"
            height={40}
            width={40}
          />
          <span>Mobi</span>
          <span className="text-[#CCFF00]">Deck</span>
        </Link>

        <ul className="lg:flex text-xl cursor-pointer mt-2 ml-auto">
          <li className=" hidden  lg:block pl-7">
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/">
              Home
            </Link>
          </li>
          <li className=" hidden  lg:block pl-7">
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/movies">
              Movies
            </Link>
          </li>
          <li className=" hidden  lg:block pl-7">
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/tvshows">
              Tv Shows
            </Link>
          </li>
          <form className="hidden md:flex lg:flex">
            <input
              ref={inputRef}
              className="w-96 h-12 lg:h-9 py-1 pl-5 pr-10 ml-8 rounded-full focus:outline-0 bg-transparent hover:border-2 border-[#CCFF00] focus:border-2 focus:border-[#CCFF00] text-[30px] lg:text-xl"
              type="text"
              placeholder="movies and Tv Shows.."
              onChange={handleInputChange}
            />
            <button
              className="-ml-8 border-6 bg-trasparent"
              type="submit"
              onClick={handleFormSubmit}
            >
              <AiOutlineSearch className="text-2xl mt-4 lg:mt-2" />
            </button>
          </form>
        </ul>
        <div className="mt-3 block md:block lg:hidden ml-auto z-10">
          <AiOutlineMenu
            className="md:text-3xl text-2xl "
            onClick={handleNav}
          />
        </div>
      </nav>
      {/* mobile View  */}

      {navVisible && (
        <ul className="bg-black text-white flex-col w-[350px] md:w-[500px] h-screen ml-auto -mt-1 text-center pt-10 text-lg cursor-pointer font-homenaje">
          <form className="md:hidden">
            <input
              className="w-80 h-16 py-1 pl-3  pr-10 ml-4 rounded-full focus:outline-0 bg-transparent border-2 border-[#CCFF00] focus:border-2 text-2xl"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
              <button
                className="bg-gray-600 border-2 font-homenaje text-xl border-[#CCFF00] w-40 h-10 rounded-3xl mt-3 ml-3 transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
                type="submit"
                onClick={handleNav && handleFormSubmit}
              >
                Search
              </button>
          </form>
          <li className="pt-7 text-xl md:text-3xl  " onClick={handleNav}>
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/">
              Home
            </Link>
          </li>
          <li className="pt-7 text-xl md:text-3xl " onClick={handleNav}>
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/movies">
              Movies
            </Link>
          </li>
          <li className="pt-7 text-xl md:text-3xl " onClick={handleNav}>
            <Link className="hover:border-b-2 border-[#CCFF00]" href="/tvshows">
              Tv Shows
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
