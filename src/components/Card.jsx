import React from "react";
import { FaCode, FaLink } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Card = ({ image, title, desc, tech, liveLink, codeLink }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-black bg-opacity-40 p-3 rounded-md shadow-2xl hover:scale-95 transition-all duration-300">
        <div className="overflow-hidden cursor-pointer relative group">
          <img
            src={image}
            alt="hunt image"
            className="w-full h-[300px] md:h-[400px]  "
          />
          <div className="translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 w-[55%] h-full md:h-full absolute top-0 right-0 bg-gray-800 bg-opacity-70 flex justify-center items-center gap-10 ">
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
          </div>
        </div>

        <h3 className="pt-2 text-lg text-designColor opacity-80">{title}</h3>
        <p className="text-sm">{desc}</p>
        <p className="pb-2 text-sm">{tech}</p>
      </div>
    </div>
  );
};

export default Card;
