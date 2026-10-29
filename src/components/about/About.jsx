import { CgWebsite } from "react-icons/cg";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaLaptopCode, FaCameraRetro } from "react-icons/fa";
import { motion } from "framer-motion";
// import profile from "../../assets/images/sabbir-p1.png";

import Title from "../Title";
import { TbMailForward } from "react-icons/tb";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 lg:py-20 overflow-x-hidden border-b border-gray-600"
    >
      <div>
        <div>
          <Title text="Know Me More" />
        </div>

        <div className="flex flex-col sm:flex-row gap-10 lg:gap-16  pt-8 md:pt-20 pb-10">
          {/* left side */}

          {/* Left side - About content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-2 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3">
              <span className="text-designColor text-sm font-medium tracking-[0.2em] uppercase">
                About Me
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-100">
                Md Sabbir Hossain
                <span className="block mt-2 text-designColor text-lg sm:text-xl md:text-2xl font-medium">
                  Full-Stack Developer
                </span>
              </h1>

              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            </div>

            <div className="flex flex-col gap-4 text-sm md:text-base leading-7 text-gray-400">
              <p>
                I am a passionate Full-Stack Developer specializing in building
                modern, responsive, and user-friendly web applications. I use
                React, Next.js, JavaScript, and TypeScript to create interactive
                interfaces with smooth experiences across mobile, tablet, and
                desktop devices.
              </p>

              <p>
                On the backend, I work with Node.js, Express.js, and MongoDB to
                build APIs and manage application data. I also use Tailwind CSS
                for clean, responsive designs and Better Auth for
                authentication. I focus on clean code, maintainable
                architecture, performance, and practical solutions to
                development challenges.
              </p>

              <p>
                I enjoy exploring new technologies, improving my skills, and
                building meaningful projects. Outside of development, I enjoy
                playing cricket and traveling. My goal is to create high-quality
                web applications while continuously growing as a developer.
              </p>
            </div>

            {/* Skills */}
            {/* <div className="pt-3">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">
                Technologies I Work With
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                  "Better Auth",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-xs sm:text-sm rounded-lg
            border border-gray-700 bg-gray-900/70 text-gray-300
            hover:border-designColor hover:text-designColor
            transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Right side - Contact card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:col-span-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/70 bg-gradient-to-br from-gray-900 via-[#111827] to-gray-950 p-5 sm:p-6 shadow-xl">
              {/* Decorative accent */}
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-designColor/10 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col gap-5">
                <div className="pb-4 border-b border-gray-700">
                  <p className="text-xs uppercase tracking-[0.2em] text-designColor mb-2">
                    Contact Information
                  </p>
                  <h2 className="text-xl font-semibold text-gray-100">
                    Let's Connect
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 leading-6">
                    Have a project in mind? Feel free to get in touch.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor">
                      <span className="text-sm">@</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">Full Name</p>
                      <p className="text-sm text-gray-200 font-medium">
                        Md Sabbir Hossain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor">
                      <span className="text-sm">@</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">
                        Email Address
                      </p>
                      <a
                        href="mailto:hossainsabbir309@gmail.com"
                        className="text-sm text-gray-200 hover:text-designColor transition-colors break-all"
                      >
                        hossainsabbir309@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor">
                      <span className="text-sm">☎</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">Phone Number</p>
                      <a
                        href="tel:+8801981441578"
                        className="text-sm text-gray-200 hover:text-designColor transition-colors"
                      >
                        01981441578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor">
                      <span className="text-sm">⌖</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-sm text-gray-200">
                        Mirpur 11, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:hossainsabbir309@gmail.com"
                  className="flex items-center justify-center gap-1 w-full rounded-lg
          bg-gradient-to-r from-purple-700 to-blue-700
          hover:from-purple-600 hover:to-blue-600
          text-white text-sm font-medium px-4 py-3
          transition-all duration-300 shadow-lg shadow-blue-950/20"
                >
                  Get In Touch
                  <span aria-hidden="true inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-designColor">
                    <TbMailForward size={20} className="pt-1" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* feature part */}
        {/* feature part */}
        {/* feature part */}
        {/* feature part */}
        {/* feature part */}
        {/* feature part */}
        <div>
          <div className="pt-8 md:pt-16 pb-12">
            <Title text="What I Do" />
          </div>

          {/* card start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
            <motion.div
              initial={{ x: "-50%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2 md:gap-3 px-5 md:px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors"
            >
              <FaLaptopCode className="group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]" />
              <h3 className="text-2xl font-medium">Frontend Development</h3>
              <p className="text-sm md:text-base">
                Produced websites compatible with multiple browsers. Designed
                and updated layouts to meet usability and performance
                requirements.Coded using HTML, CSS, JavaScript and React to
                develop features for both mobile and desktop platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: "60%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 px-5 md:px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors"
            >
              <LuMonitorSmartphone className="group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]" />
              <h3 className="text-2xl font-medium">Web Design</h3>
              <p className="text-sm md:text-base">
                {" "}
                Designed and updated layouts to meet usability and performance
                requirements.Coded using HTML, CSS, JavaScript and React to
                develop features for both mobile and desktop platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: "-40%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 px-5 md:px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors"
            >
              <CgWebsite className="group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]" />
              <h3 className="text-2xl font-medium">E-Commerce</h3>
              <p className="text-sm md:text-base">
                Produced e-commerce websites compatible wit multiple browsers.
                Designed and updated layouts meet usability and performance
                requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ x: "70%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3  px-5 md:px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors"
            >
              <FaCameraRetro className="group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]" />
              <h3 className="text-2xl font-medium">Photography</h3>
              <p className="text-sm md:text-base">
                I am not a professional photographer but I like to take
                pictures.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
