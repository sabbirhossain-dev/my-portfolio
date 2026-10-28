// import { FaBootstrap, FaHtml5, FaFigma } from "react-icons/fa";
// import { IoLogoCss3 } from "react-icons/io5";
// import { IoLogoJavascript } from "react-icons/io";
// import { FaReact } from "react-icons/fa";
// import { TbBrandRedux } from "react-icons/tb";
// import { SiJquery } from "react-icons/si";
// import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// // import Skill from "./skill";

// const Skills = () => {
//   return (
//     <>
//       <div className="pb-10 md:pb-16">
//         <h3 className="text-2xl tracking-wider text-designColor opacity-90 font-medium pb-12 pt-5 uppercase">
//           My Skills
//         </h3>
//         <div className=" px-1 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-16 md:gap-16 ">
//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <FaHtml5 className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">HTML</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <IoLogoCss3 className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">CSS</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="skillsIcons group"
//           >
//             <IoLogoJavascript className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">JavaScript</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <FaReact className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">React</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="skillsIcons group"
//           >
//             <TbBrandRedux className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">Redux</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <RiNextjsLine className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">Next</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="skillsIcons group"
//           >
//             <SiJquery className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">jQuery</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <RiTailwindCssFill className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">Tailwind</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="skillsIcons group"
//           >
//             <FaBootstrap className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">Bootstrap</p>
//           </motion.div>

//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="skillsIcons group"
//           >
//             <FaFigma className="group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]" />
//             <p className="text-sm md:text-base">Figma</p>
//           </motion.div>
//         </div>
//       </div>

//       {/* <ul className='gap-5 md:gap-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6'>
//                 <li className='skillsIcon animate-pulse'>
//                 </li>
//                 <li className='skillsIcon animate-pulse'><IoLogoCss3 /></li>
//                 <li className='skillsIcon animate-pulse'><IoLogoJavascript /></li>
//                 <li className='skillsIcon animate-pulse '><FaReact /></li>
//                 <li className='skillsIcon animate-pulse'><TbBrandRedux /></li>
//                 <li className='skillsIcon animate-pulse'><SiJquery /></li>
//                 <li className='skillsIcon animate-pulse'><RiNextjsLine /></li>
//                 <li className='skillsIcon animate-pulse'><RiTailwindCssFill /></li>
//                 <li className='skillsIcon animate-pulse'><FaBootstrap /></li>
//                 <li className='skillsIcon animate-pulse'><FaFigma /></li>
//                 <li className='skillsIcon animate-pulse'><SiAdobexd /></li>
//             </ul> */}

//       {/* <Skill /> */}
//     </>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaReact,
  // FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  // SiJquery,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiShadcnui,
  // SiHeroUI,
  // SiBetterauth,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
      // { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      // { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    ],
  },
  {
    category: "Backend & Authentication",
    description: "Creating server-side functionality and authentication",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Better Auth", icon: FaShieldAlt, color: "#FFFFFF" },
    ],
  },
  {
    category: "Database & Services",
    description: "Working with databases and backend services",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Design Tools",
    description: "Designing layouts and visual experiences",
    skills: [{ name: "Figma", icon: FaFigma, color: "#F24E1E" }],
  },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

      {/* Heading */}
      <div className="relative mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-designColor">
          What I Work With
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          My <span className="text-designColor">Skills</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Technologies and tools I use to build modern, responsive, and
          user-friendly web applications.
        </p>

        <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      {/* Skill categories */}
      <div className="relative space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: groupIndex * 0.1,
            }}
          >
            {/* Category heading */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">
                {group.category}
              </h3>

              <p className="mt-1 text-sm text-slate-500">{group.description}</p>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/20 sm:p-5"
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                      style={{ backgroundColor: skill.color }}
                    />

                    <div className="relative flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#111521] transition-all duration-300 group-hover:scale-105"
                        style={{
                          color: skill.color,
                        }}
                      >
                        <Icon size={27} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                          {skill.name}
                        </h4>

                        <p className="mt-1 text-xs text-slate-500">
                          Technology
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
