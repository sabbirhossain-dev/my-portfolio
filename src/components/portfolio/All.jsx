import React from "react";
import gym from "../../assets/images/gym.png";
import hunt from "../../assets/images/hunt3.png";
import gyan from "../../assets/images/gyan2.png";
import bizzency from "../../assets/images/bizzency2.png";
import personalWebsite from "../../assets/images/personalWebsite.png";
import forever from "../../assets/images/foreverrr.png";
import grocery from "../../assets/images/grocery2.png";

import Card from "../Card";

const All = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          image={grocery}
          title="Daily Grocery Web Application"
          desc="Developed a responsive grocery e-commerce platform with product browsing, cart management, filtering, and smooth user interactions."
          tech="Tech Stack: React.js • React Router • Tailwind CSS • Context API • Framer Motion"
          liveLink="https://web-grocery-app.vercel.app"
          codeLink="https://github.com/sabbirhossain-dev/Grocery-App.git"
          className="h-full"
        />

        <Card
          image={forever}
          title="Forever-Responsive Fashion Web Application"
          desc="Built a fully responsive fashion e-commerce interface featuring product details, dynamic cart functionality, and advanced filtering systems."
          tech="Tech Stack: React.js • React Router • Tailwind CSS • Context API • Hooks"
          liveLink="https://clothing-website-azure.vercel.app"
          codeLink="https://github.com/sabbirhossain-dev/clothing-website.git"
          className="h-full"
        />
        <Card
          image={personalWebsite}
          title="Personal Portfolio"
          desc="Designed and developed a personal portfolio showcasing projects, skills, and professional achievements with a clean user interface."
          tech="Tech Stack: React.js • Tailwind CSS • Framer Motion"
          liveLink="https://portfolio-website-pi-lac-81.vercel.app/"
          codeLink="https://github.com/sabbirhossain-dev/portfolio-website.git"
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
          image={hunt}
          title="Business Website"
          desc="Developed a responsive business website with modern layouts, service showcases, and intuitive navigation."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript • Bootstrap"
          liveLink="https://sabbirhossain-dev.github.io/Hunt/"
          codeLink="https://github.com/sabbirhossain-dev/Hunt.git"
        />
        <Card
          image={gym}
          title="Gymnasium Website"
          desc="Built a responsive fitness website featuring membership plans, training programs, and engaging user interfaces."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript• jQuery • Bootstrap"
          liveLink="https://sabbirhossain-dev.github.io/Gym-by-sabbir/"
          codeLink="https://github.com/sabbirhossain-dev/Gym-by-sabbir.git"
        />
        {/* <Card
          image={gyan}
          title="Learning Website"
          desc="Developed an educational platform interface focused on course presentation, learning resources, and user-friendly navigation."
          tech="Tech Stack: HTML5 • CSS3 • JavaScript • Bootstrap"
        /> */}
      </div>
    </>
  );
};

export default All;
