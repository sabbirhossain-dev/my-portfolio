import React from "react";
import { FaCode, FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Card = ({ image, title, desc, tech, liveLink, codeLink }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-black border border-blue-900 border-opacity-30 bg-opacity-50 p-3 rounded-md shadow-md hover:shadow-2xl hover:border-opacity-70 transition-all duration-300">
        <div className="overflow-hidden cursor-pointer relative">
          <img
            src={image}
            alt="hunt image"
            className="w-full h-[300px] md:h-[350px] hover:scale-105 transition-all duration-300 "
          />
          {/* <div className="translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 w-[55%] h-full md:h-full absolute top-0 right-0 bg-gray-800 bg-opacity-70 flex justify-center items-center gap-10 ">
            <a
              href={liveLink}
              target="_blank"
              className="flex gap-2 justify-center items-center"
            >
              <span className="text-lg transition-all duration-300 hover:text-designColor underline">
                Live
              </span>
              <TbWorld
                size={18}
                className="text-designColor font-medium cursor-pointer  "
              />
            </a>
            <a
              href={codeLink}
              target="_blank"
              className="flex gap-2 justify-center items-center"
            >
              <span className="text-lg transition-all duration-300 hover:text-designColor underline">
                Code
              </span>
              <FaCode
                size={18}
                className="text-designColor font-medium cursor-pointe"
              />
            </a>
          </div> */}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="pt-2 text-lg text-designColor opacity-80">{title}</h3>
          <p className="text-sm">{desc}</p>
          <p className="pb-2 text-sm text-blue-700">{tech}</p>

          <div className="flex gap-5 text-sm md:text-md pb-1">
            <a
              href={liveLink}
              target="_blank"
              className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-4 md:px-7 m-1 rounded-md group"
            >
              <span className=" transition-all duration-300 group-hover:text-designColor">
                Live Demo
              </span>
              <TbWorld
                size={16}
                className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
              />
            </a>

            <a
              href={codeLink}
              target="_blank"
              className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-4 md:px-7 m-1 rounded-md group"
            >
              <span className=" transition-all duration-300 group-hover:text-designColor">
                GitHub
              </span>
              <FaGithub
                size={16}
                className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
