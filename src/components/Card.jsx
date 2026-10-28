// import { Link } from "react-router-dom";
// import { FaInfoCircle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
// import { TbWorld } from "react-icons/tb";

// const Card = ({
//   id,
//   image,
//   title,
//   desc,
//   desc1,
//   techStack,
//   liveLink,
//   codeLink,
//   className = "",
// }) => {
//   return (
//     <div className={className}>
//       <div className="flex flex-col gap-3 bg-black border border-blue-900 border-opacity-30 bg-opacity-50 p-3 rounded-md shadow-md hover:shadow-2xl hover:border-opacity-70 transition-all duration-300">
//         <div className="overflow-hidden cursor-pointer relative">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-[300px] md:h-[350px] hover:scale-105 transition-all duration-300 "
//           />
//         </div>

//         <div className="flex flex-col gap-3">
//           <h3 className="pt-2 text-lg text-designColor opacity-80">{title}</h3>
//           <p className="text-sm">{desc1}</p>
//           <p className="pb-2 text-sm text-blue-700">
//             Tech Stack: {techStack?.join(" • ")}
//           </p>

//           <div className="flex flex-wrap gap-3 text-sm md:text-md pb-1">
//             <Link
//               to={`/project/${id}`}
//               className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
//             >
//               <span className=" transition-all duration-300 group-hover:text-designColor">
//                 Details
//               </span>
//               <FaInfoCircle
//                 size={16}
//                 className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
//               />
//             </Link>

//             {liveLink && (
//               <a
//                 href={liveLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
//               >
//                 <span className=" transition-all duration-300 group-hover:text-designColor">
//                   Live Demo
//                 </span>
//                 <TbWorld
//                   size={16}
//                   className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
//                 />
//               </a>
//             )}

//             {codeLink && (
//               <a
//                 href={codeLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-3 md:px-4 m-1 rounded-md group"
//               >
//                 <span className=" transition-all duration-300 group-hover:text-designColor">
//                   GitHub
//                 </span>
//                 <FaGithub
//                   size={16}
//                   className=" cursor-pointer transition-all duration-300 group-hover:text-designColor "
//                 />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Card = ({
  id,
  image,
  title,
  desc,
  desc1,
  techStack = [],
  liveLink,
  codeLink,
  className = "",
}) => {
  return (
    <article className={`group relative h-full ${className}`}>
      {/* Card glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/10 to-cyan-500/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f19] shadow-lg shadow-black/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-400/40 group-hover:shadow-xl group-hover:shadow-blue-950/30">
        {/* Project image */}
        <div className="relative m-3 mb-0 overflow-hidden rounded-xl bg-slate-900">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-56 lg:h-52 xl:h-60"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f19]/80 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

          {/* Project label */}
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Featured Project
            </span>
          </div>

          {/* Quick details icon */}
          <Link
            to={`/project/${id}`}
            aria-label={`View details for ${title}`}
            className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <FaArrowRight className="-rotate-45" />
          </Link>
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Title */}
          <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-2xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-400">
            {desc1 || desc}
          </p>

          {/* Technologies */}
          {techStack.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Built With
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Action buttons */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
            {/* Left side: Live Demo and GitHub */}
            <div className="flex flex-wrap items-center gap-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${title}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 sm:px-4"
                >
                  <TbWorld size={17} />
                  Live Demo
                </a>
              )}

              {codeLink && (
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${title}`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-300 active:scale-95"
                >
                  <FaGithub size={19} />
                </a>
              )}
            </div>

            {/* Right side: Details */}
            <Link
              to={`/project/${id}`}
              className="group/details inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-950/30 transition-all duration-300 hover:from-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-blue-900/30 active:scale-95"
            >
              <FaInfoCircle size={14} />
              Details
              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover/details:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
