import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/Group.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute sm:top-[1.5rem] top-[1rem] sm:left-[1.5rem] left-[1rem] [text-decoration:none]  text-cyan cursor-pointer
      flex items-center
      sm:text-lg text-md"
    >
      <img src={logoSvg} alt="CryptoBucks" className="w-[20%] h-auto" />
      <span className="text-white">CrypTrack</span>
    </Link>
  );
};

export default Logo;
