"use client";
import Image from "next/image";
import { Link } from "react-scroll";

import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  function play() {
    var audio = document.getElementById("a1");
    audio.play();
    setIsPlaying(true);
  }

  function pause() {
    var audio = document.getElementById("a1");
    audio.pause();
    setIsPlaying(false);
  }

  const handleOpenToggle = () => {
    setActive(true);
  };

  const handleCloseToggle = () => {
    setActive(false);
  };
  return (
    <nav className="w-full z-20 bg-[#121216] fixed md:right-[10%]  m-auto h-[90px] shadow-lg  border-b border-pink-500 md:border-none md:w-[80%] md:m-auto md:shadow-lg  ">
      <div className="w-[80%] m-auto">
        <div className="flex justify-between items-center h-full py-5">
          <div className="flex gap-5 justify-between items-center h-full">
            <svg
              onClick={handleOpenToggle}
              className="lg:hidden cursor-pointer"
              width="16"
              height="15"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
            <div className="">
              <h1 className="font-bold italic text-2xl text-pink-500 md:text-3xl ">
                KENESON
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 h-full">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/playWhite.png"
                alt="play-icon"
                width={30}
                height={30}
                onClick={play}
                className={`${
                  isPlaying ? "hidden" : ""
                } cursor-pointer w-[25px] h-[25px]`}
              />
              <Image
                src="/pause.png"
                alt="pause-icon"
                width={30}
                height={30}
                className={`absolute top-0 cursor-pointer ${
                  isPlaying ? "h-[30px] w-[30px]" : "hidden"
                }`}
                onClick={pause}
              />
              <audio id="a1">
                <source src="/audio2.mp3" type="audio/mpeg"></source>
              </audio>
            </div>
          </div>
        </div>
        <ul
          className={`bg-gray-900 h-lvh absolute  top-0 left-0 transition-all duration-500 shadow-lg w-0 overflow-hidden z-20 space-y-9 space-x-5 ${
            active ? "w-[200px] transition-all duration-500" : ""
          }  lg:w-[50%] lg:flex  lg:justify-center  lg:shadow-none  lg:m-auto  lg:h-[80px]  lg:relative lg:top-[-93px] lg:bg-transparent`}>
          <svg
            onClick={handleCloseToggle}
            className="m-5 lg:hidden cursor-pointer"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <li>
            <Link
              className="font-bold text-xl lg:text-gray-400 hover:text-pink-500 cursor-pointer"
              onClick={handleCloseToggle}
              smooth={true}
              duration={700}
              to="about">
              About
            </Link>
          </li>

          <li>
            <Link
              className="font-bold text-xl lg:text-gray-400 hover:text-pink-500 cursor-pointer"
              onClick={handleCloseToggle}
              smooth={true}
              duration={700}
              to="projects">
              Works
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-xl lg:text-gray-400 hover:text-pink-500 cursor-pointer"
              onClick={handleCloseToggle}
              smooth={true}
              duration={700}
              to="skills">
              Skills
            </Link>
          </li>

          <li>
            <Link
              className="font-bold text-xl lg:text-gray-400 hover:text-pink-500  cursor-pointer"
              onClick={handleCloseToggle}
              smooth={true}
              duration={700}
              to="resume">
              Resume
            </Link>
          </li>

          <li>
            <Link
              className="font-bold text-xl lg:text-gray-400 hover:text-pink-500 cursor-pointer"
              onClick={handleCloseToggle}
              smooth={true}
              duration={700}
              to="footer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={` w-full h-lvh absolute top-0 right-0 bg-black opacity-[0.5] blur-sm z-10 ${
          active ? "block" : "hidden"
        } `}
        onClick={handleCloseToggle}></div>
    </nav>
  );
}

export default Navbar;
