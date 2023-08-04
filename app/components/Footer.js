import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-homenaje ">
      <div className="flex justify-center text-[29px] cursor-pointer">
        <span>Movie</span>
        <span className="text-[#CCFF00]">Dekh</span>
      </div>
      <div className="flex justify-center mt-3 mb-3">
        <Link
          href="https://www.linkedin.com/in/mayank-singh-ab2794254/"
          className="border-2 m-1 p-2 rounded-xl bg-gray-600   border-[#CCFF00]   transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-xl" />
        </Link>
        <Link
          href="https://github.com/Mayank-Singh-dev?tab=repositories"
          className="border-2 m-1 p-2 rounded-xl bg-gray-600   border-[#CCFF00]   transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-xl" />
        </Link>
        <Link
          href="https://mayank-portfolio-x.netlify.app/"
          className="border-2 m-1 p-2 rounded-xl bg-gray-600   border-[#CCFF00]   transition-all hover:bg-[#CCFF00] hover:text-black  hover:border-[#CCFF00] hover:scale-105 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
          <BsFillFileEarmarkPersonFill className="text-xl" />
        </Link>
      </div>
      <div className="flex justify-center text-lg">
        ©2023 Mayank Singh | All right reserved
      </div>
    </footer>
  );
};

export default Footer;
