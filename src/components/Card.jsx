import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Card = ({
  id,
  image,
  title,
  desc,
  desc1,
  techStack,
  liveLink,
  codeLink,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 bg-black border border-blue-900 border-opacity-30 bg-opacity-50 p-3 rounded-md shadow-md hover:shadow-2xl hover:border-opacity-70 transition-all duration-300">
        <div className="overflow-hidden cursor-pointer relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] md:h-[350px] hover:scale-105 transition-all duration-300 "
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="pt-2 text-lg text-designColor opacity-80">{title}</h3>
          <p className="text-sm">{desc1}</p>
          <p className="pb-2 text-sm text-blue-700">
            Tech Stack: {techStack?.join(" • ")}
          </p>

          <div className="flex flex-wrap gap-3 text-sm md:text-md pb-1">
            <Link
              to={`/project/${id}`}
              className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
            >
              <span className=" transition-all duration-300 group-hover:text-designColor">
                Details
              </span>
              <FaInfoCircle
                size={16}
                className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
              />
            </Link>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
              >
                <span className=" transition-all duration-300 group-hover:text-designColor">
                  Live Demo
                </span>
                <TbWorld
                  size={16}
                  className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
                />
              </a>
            )}

            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
              >
                <span className=" transition-all duration-300 group-hover:text-designColor">
                  GitHub
                </span>
                <FaGithub
                  size={16}
                  className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
