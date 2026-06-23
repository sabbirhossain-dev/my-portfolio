import React from "react";
import { FaCode, FaFigma } from "react-icons/fa";
import { FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(125px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(125px) rotate(-360deg);
            }
          }

          .orbit {
            position: absolute;
            top: 50%;
            left: 50%;
            animation: orbit 8s linear infinite;
            font-size: 24px;
          }
        `}
      </style>

      <div className="border rounded-full w-[400px] h-[400px] flex justify-center items-center relative">
        <div className="border rounded-full w-[250px] h-[250px] flex justify-center items-center relative">
          {/* Orbiting Icon */}
          <ul className="orbit">
            <li>
              <FaFigma
                size={44}
                className="text-designColor rounded-md bg-slate-800 p-2"
              />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaBootstrap />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          {/* Center Icon */}
          <div className="p-5 text-3xl text-designColor">
            <FaCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
