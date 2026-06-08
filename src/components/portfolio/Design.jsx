import React from "react";
import gym from "../../assets/images/gym.png";
import hunt from "../../assets/images/hunt3.png";
import gyan from "../../assets/images/gyan2.png";
import bizzency from "../../assets/images/bizzency2.png";

import Card from "../Card";

const Design = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <Card
          image={hunt}
          title="Business Website"
          desc="Developed a responsive business website with modern layouts, service showcases, and intuitive navigation."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript • Bootstrap"
          liveLink="https://sabbirhossain-dev.github.io/Hunt/"
          codeLink="https://github.com/sabbirhossain-dev/Hunt.git"
        />
        <Card
          image={bizzency}
          title="Business Website"
          desc="Created a modern and responsive business website focused on user engagement, brand presentation, and seamless navigation."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript • jQuery • Bootstrap"
          liveLink="https://sabbirhossain-dev.github.io/Bizzency/"
          codeLink="https://github.com/sabbirhossain-dev/Bizzency.git"
        />

        <Card
          image={gym}
          title="Gymnasium Website"
          desc="Built a responsive fitness website featuring membership plans, training programs, and engaging user interfaces."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript• jQuery • Bootstrap"
          liveLink="https://sabbirhossain-dev.github.io/Gym-by-sabbir/"
          codeLink="https://github.com/sabbirhossain-dev/Gym-by-sabbir.git"
        />
        <Card
          image={gyan}
          title="Learning Website"
          desc="Developed an educational platform interface focused on course presentation, learning resources, and user-friendly navigation."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript • Bootstrap"
        />
      </div>
    </>
  );
};

export default Design;
