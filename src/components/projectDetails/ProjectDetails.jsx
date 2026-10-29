// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa";
// import { TbWorld } from "react-icons/tb";

// import Title from "../Title";
// import { getProjectById } from "../../constans/projects";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = getProjectById(id);

//   if (!project) {
//     return (
//       <section className="py-10 md:py-16 min-h-screen flex flex-col justify-center items-center gap-6">
//         <h2 className="text-2xl text-designColor">Project not found</h2>
//         <Link
//           to="/"
//           state={{ scrollTo: "portfolio" }}
//           className="flex gap-2 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-7 rounded-md group"
//         >
//           <FaArrowLeft
//             size={16}
//             className="transition-all duration-300 group-hover:text-designColor"
//           />
//           <span className="transition-all duration-300 group-hover:text-designColor">
//             Back to Portfolio
//           </span>
//         </Link>
//       </section>
//     );
//   }

//   return (
//     <>
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="py-10 md:py-16 min-h-screen"
//       >
//         <Title text="Project Details" />

//         <div className="max-w-4xl mx-auto pt-16 flex flex-col gap-8">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-auto rounded-md border border-blue-900 border-opacity-30 shadow-md"
//           />

//           <div className="flex flex-col gap-4">
//             <h2 className="text-2xl md:text-3xl text-designColor">
//               {project.title}
//             </h2>
//             <p className="text-sm md:text-base leading-relaxed">
//               {project.desc}
//             </p>
//           </div>

//           {project.features?.length > 0 && (
//             <div className="flex flex-col gap-3">
//               <h3 className="text-xl text-gray-300 font-semibold">
//                 Key Features
//               </h3>
//               <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-designColor text-sm md:text-base">
//                 {project.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <h3 className="text-xl text-gray-300 font-semibold">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {project.techStack?.map((tech) => (
//                 <span
//                   key={tech}
//                   className="text-sm text-blue-700 bg-black bg-opacity-30 border border-blue-900 border-opacity-30 px-3 py-1 rounded-md"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {project.images?.length > 0 && (
//             <div className="flex flex-col gap-3">
//               <h3 className="text-xl text-gray-300 font-semibold">
//                 Screenshots
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {project.images.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt={`${project.title} screenshot ${index + 1}`}
//                     className="w-full h-auto rounded-md border border-blue-900 border-opacity-30 shadow-md"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-5 text-sm md:text-md pt-2">
//             {project.liveLink && (
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-4 md:px-7 rounded-md group"
//               >
//                 <span className="transition-all duration-300 group-hover:text-designColor">
//                   Live Demo
//                 </span>
//                 <TbWorld
//                   size={16}
//                   className="transition-all duration-300 group-hover:text-designColor"
//                 />
//               </a>
//             )}

//             {project.codeLink && (
//               <a
//                 href={project.codeLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-4 md:px-7 rounded-md group"
//               >
//                 <span className="transition-all duration-300 group-hover:text-designColor">
//                   GitHub
//                 </span>
//                 <FaGithub
//                   size={16}
//                   className="transition-all duration-300 group-hover:text-designColor"
//                 />
//               </a>
//             )}

//             <Link
//               to="/"
//               state={{ scrollTo: "portfolio" }}
//               className="flex gap-1 justify-center items-center bg-gradient-to-r from-purple-700 to-blue-800 p-2 px-4 md:px-7 rounded-md group"
//             >
//               <span className="transition-all duration-300 group-hover:text-designColor">
//                 Back to Portfolio
//               </span>
//               <FaArrowLeft
//                 size={16}
//                 className="transition-all duration-300 group-hover:text-designColor"
//               />
//             </Link>
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// };

// export default ProjectDetails;

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
  FaLightbulb,
  FaCode,
  FaWandMagicSparkles,
  // FaTriangleExclamation,
} from "react-icons/fa6";

import Title from "../Title";
import { getProjectById } from "../../constans/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  const sectionTitle =
    "text-xl md:text-2xl text-gray-200 font-semibold flex items-center gap-2";

  const cardStyle =
    "rounded-lg border border-blue-900/40 bg-black/20 p-4 md:p-5";

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center gap-6 px-4">
        <h2 className="text-2xl text-designColor">Project not found</h2>

        <Link
          to="/"
          state={{ scrollTo: "portfolio" }}
          className="flex gap-2 items-center bg-gradient-to-r from-purple-700 to-blue-800 p-3 px-6 rounded-md"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-10 md:py-16 px-4"
    >
      <Title text="Project Details" />

      <div className="max-w-4xl mx-auto pt-12 md:pt-16 flex flex-col gap-8">
        {/* Project Image */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full max-h-[500px] object-cover rounded-lg border border-blue-900/40 shadow-md"
        />

        {/* Overview */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl text-designColor font-semibold">
            {project.title}
          </h2>

          <p className="text-sm md:text-base leading-7 text-gray-300">
            {project.desc}
          </p>
        </div>

        {/* Key Features */}
        {project.features?.length > 0 && (
          <section className={cardStyle}>
            <h3 className={`${sectionTitle} mb-4`}>
              <FaWandMagicSparkles className="text-designColor" />
              Key Features
            </h3>

            <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-designColor text-sm md:text-base text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Technology Stack */}
        {project.techStack?.length > 0 && (
          <section className={cardStyle}>
            <h3 className={`${sectionTitle} mb-4`}>
              <FaCode className="text-designColor" />
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-blue-300 bg-blue-950/40 border border-blue-800/50 px-3 py-2 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Development Challenges */}
        {project.challenges?.length > 0 && (
          <section className={cardStyle}>
            <h3 className={`${sectionTitle} mb-5`}>
              {/* <FaTriangleExclamation className="text-designColor" /> */}
              Challenges Faced & Solutions
            </h3>

            <div className="flex flex-col gap-5">
              {project.challenges.map((item, index) => (
                <article
                  key={index}
                  className="border-l-2 border-blue-700 pl-4 flex flex-col gap-2"
                >
                  <h4 className="text-base md:text-lg font-semibold text-gray-100">
                    {index + 1}. {item.challenge}
                  </h4>

                  <p className="text-sm md:text-base leading-7 text-gray-400">
                    <span className="text-designColor font-medium">
                      Solution:{" "}
                    </span>
                    {item.solution}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Future Improvements */}
        {project.futureImprovements?.length > 0 && (
          <section className={cardStyle}>
            <h3 className={`${sectionTitle} mb-4`}>
              <FaLightbulb className="text-designColor" />
              Future Improvements
            </h3>

            <ul className="list-disc pl-5 flex flex-col gap-3 marker:text-designColor text-sm md:text-base text-gray-300">
              {project.futureImprovements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshots */}
        {project.images?.length > 0 && (
          <section>
            <h3 className={`${sectionTitle} mb-4`}>Project Screenshots</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg border border-blue-900/40 shadow-md"
                />
              ))}
            </div>
          </section>
        )}

        {/* Project Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center bg-gradient-to-r from-purple-700 to-blue-800 p-3 px-5 rounded-md hover:opacity-90 transition"
            >
              Live Demo
              <TbWorld size={18} />
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 p-3 px-5 rounded-md hover:opacity-90 transition"
            >
              GitHub Repository
              <FaGithub size={18} />
            </a>
          )}

          <Link
            to="/"
            state={{ scrollTo: "portfolio" }}
            className="flex gap-2 items-center justify-center border border-blue-800 p-3 px-5 rounded-md hover:bg-blue-950/40 transition"
          >
            <FaArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
