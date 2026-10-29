import { motion } from "framer-motion";

const comments = () => {
  return (
    <div>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-2/3 flex flex-col gap-2"
      >
        <h1 className="text-xl sm:text-xl md:text-3xl font-normal pb-4 md:pb-6">
          <span className="text-designColor font-medium text-xl md:text-3xl">
            Md Sabbir Hossain,{" "}
          </span>
          a Frontend Developer
        </h1>
        <p className="text-sm md:text-base">
          I am a passionate Full-Stack Developer specializing in building
          modern, responsive, and user-friendly web applications. I work with
          React, Next.js, JavaScript, and TypeScript to create interactive user
          interfaces that provide smooth and engaging user experiences across
          mobile, tablet, and desktop devices.
        </p>
        <p className="text-sm md:text-base">
          On the backend, I use Node.js, Express.js, and MongoDB to develop
          APIs, manage application data, and build functional web applications.
          I also work with Tailwind CSS to create clean, consistent designs and
          Better Auth to implement authentication. I focus on writing clean,
          maintainable code, solving development challenges, and building
          applications that balance performance, usability, and functionality.
        </p>
        <p className="text-sm md:text-base">
          I enjoy learning new technologies, improving my development skills,
          and working on projects that help me grow as a developer. Outside of
          coding, I enjoy playing cricket and traveling, which help me stay
          motivated and explore new experiences. My goal is to build
          high-quality web applications and continuously grow as a developer.
        </p>
      </motion.div>

      {/* right side */}
      <motion.div
        initial={{ x: "80%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-1/3 flex flex-col"
      >
        {/* <div className="w-auto h-[380px] border border-dotted border-designColor flex justify-center items-center">
              <img src={profile} alt="about-img" className="w-full h-full" />
            </div> */}

        <div>
          <p className="text-gray-300 md:text-[17px] border-b border-gray-600 pt-0 pb-3 ">
            <span className="text-designColor opacity-90 font-medium">
              Name:{" "}
            </span>{" "}
            Md Sabbir Hossain
          </p>

          {/* <p className="text-gray-300 md:text-[18px] border-b border-gray-600 py-3">
                <span className="text-designColor opacity-90 font-medium">
                  Age:{" "}
                </span>
                26
              </p> */}

          <p className="text-gray-300 md:text-[17px] border-b border-gray-600 py-3">
            <span className="text-designColor opacity-90 font-medium">
              Email:{" "}
            </span>
            hossainsabbir309@gmail.com
          </p>

          <p className="text-gray-300 md:text-[17px] border-b border-gray-600 py-3">
            <span className="text-designColor opacity-90 font-medium">
              Phone:{" "}
            </span>
            01981441578
          </p>

          <p className="text-gray-300 md:text-[17px] border-b border-gray-600 py-3">
            <span className="text-designColor opacity-90 font-medium">
              Location:{" "}
            </span>
            Mirpur 11, Dhaka
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default comments;
