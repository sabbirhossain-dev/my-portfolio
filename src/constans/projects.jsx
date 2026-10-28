import grocery from "../assets/images/grocery2.png";
import groceryAlt from "../assets/images/grocery1.png";
import forever from "../assets/images/foreverrr.png";
import foreverAlt from "../assets/images/foreverr.png";
import foreverPhone from "../assets/images/foreverphn.png";
import personalWebsite from "../assets/images/personalWebsite.png";
import bizzency from "../assets/images/bizzency2.png";
import bizzencyAlt from "../assets/images/bizzency.png";
import hunt from "../assets/images/hunt3.png";
import huntAlt from "../assets/images/hunt2.png";
import gym from "../assets/images/gym.png";
import gymAlt from "../assets/images/gym2.png";
import gyan from "../assets/images/gyan2.png";
import gyanAlt from "../assets/images/Gyan.png";

// Single source of truth for portfolio projects.
// categories: which filter tabs the project appears in ("design" / "development").
// featured: false hides the project from the "All" tab.
export const projects = [
  {
    id: "daily-grocery-app",
    title: "Daily Grocery Web Application",
    desc: "Daily Grocery is a responsive e-commerce web application designed to provide users with a convenient and seamless online grocery shopping experience. The platform allows users to explore a variety of grocery products, browse items by category, filter products efficiently, and manage their shopping cart with ease. Built with React.js and React Router, the application provides smooth navigation between pages, while Context API ensures consistent cart state management across components. Tailwind CSS is used to create a clean, modern, and mobile-friendly interface, and Framer Motion enhances the user experience with smooth animations and transitions. The project focuses on usability, reusable components, and responsive design to deliver a practical shopping experience across different devices.",
    desc1:
      "Developed a responsive grocery e-commerce platform with product browsing, cart management, filtering, and smooth user interactions.",
    techStack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Context API",
      "Framer Motion",
    ],
    categories: ["development"],
    featured: true,
    image: grocery,
    // images: [groceryAlt],
    liveLink: "https://web-grocery-app.vercel.app",
    codeLink: "https://github.com/sabbirhossain-dev/Grocery-App.git",
    features: [
      "Product browsing with category filtering",
      "Cart management using Context API",
      "Responsive layout for mobile and desktop",
      "Smooth transitions powered by Framer Motion",
    ],
  },
  {
    id: "forever-fashion-app",
    title: "Forever-Responsive Fashion Web Application",
    desc: "Forever is a modern and fully responsive fashion e-commerce web application built to deliver an engaging online clothing shopping experience. The platform presents fashion products through an organized storefront where users can explore collections, view individual product details, filter available items, and interact with a dynamic shopping cart. Developed with React.js, the application uses reusable components and React Hooks to manage interface behavior and improve maintainability. React Router provides smooth navigation, while Context API helps manage shared shopping cart data across the application. Tailwind CSS ensures a consistent responsive layout across desktop, tablet, and mobile devices. The project demonstrates the development of an interactive storefront with a focus on product discovery, usability, and a clean visual presentation.",
    desc1:
      "Built a fully responsive fashion e-commerce interface featuring product details, dynamic cart functionality, and advanced filtering systems.",
    techStack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Context API",
      "Hooks",
    ],
    categories: ["development"],
    featured: true,
    image: forever,
    // images: [foreverAlt, foreverPhone],
    liveLink: "https://clothing-website-azure.vercel.app",
    codeLink: "https://github.com/sabbirhossain-dev/clothing-website.git",
    features: [
      "Product details view",
      "Dynamic cart functionality",
      "Advanced product filtering",
      "Fully responsive fashion storefront",
    ],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    desc: "This personal portfolio website was designed and developed to showcase professional skills, technical expertise, selected projects, and development experience in a clear and engaging way. The website features a structured layout that helps visitors explore the portfolio, learn more about the developer, review technical skills, and access project demonstrations and source code. Built with React.js, the application uses reusable components to maintain a consistent design and make future updates easier. Tailwind CSS provides a responsive and visually cohesive interface, while Framer Motion adds subtle animations and transitions that enhance navigation and presentation. The overall design emphasizes readability, accessibility, responsive behavior, and a professional online presence across different screen sizes.",
    desc1:
      "Designed and developed a personal portfolio showcasing projects, skills, and professional achievements with a clean user interface.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    categories: ["development"],
    featured: true,
    image: personalWebsite,
    // images: [],
    liveLink: "https://portfolio-website-pi-lac-81.vercel.app/",
    codeLink: "https://github.com/sabbirhossain-dev/portfolio-website.git",
    features: [
      "Showcase of projects, skills, and achievements",
      "Clean dark-themed user interface",
      "Animated section transitions",
    ],
  },
  //hello
  {
    id: "bizzency",
    title: "Business Website",
    desc: "Bizzency is a modern business website created to present a company's services, brand identity, and professional offerings through a polished and organized interface. The layout is designed to guide visitors through important business information using clearly structured sections, visual elements, and intuitive navigation. Built with HTML5, CSS3, JavaScript, jQuery, and Bootstrap, the website combines responsive layouts with interactive interface elements to provide a consistent browsing experience across different devices. Bootstrap supports the responsive grid and layout structure, while custom styling helps maintain the site's visual identity. The project focuses on front-end development fundamentals, effective content presentation, and creating a professional website suitable for a business-oriented audience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    categories: ["design"],
    featured: true,
    image: bizzency,
    // images: [bizzencyAlt],
    liveLink: "https://sabbirhossain-dev.github.io/Bizzency/",
    codeLink: "https://github.com/sabbirhossain-dev/Bizzency.git",
    features: [
      "Modern responsive layout",
      "Brand-focused presentation",
      "Seamless navigation",
    ],
  },
  {
    id: "hunt",
    title: "Business Website",
    desc: "Hunt is a responsive business website developed to present services, communicate a brand's value, and help visitors navigate business information efficiently. The website uses a structured layout with dedicated content sections, visual elements, and clear navigation to create an organized browsing experience. Developed using HTML5, CSS3, JavaScript, and Bootstrap, the project demonstrates the use of responsive web design principles and interactive front-end elements. Bootstrap helps maintain consistent layouts across screen sizes, while custom CSS and JavaScript contribute to the site's presentation and behavior. The main focus of the project is to create a visually appealing business interface that balances content hierarchy, usability, and responsive design across desktop, tablet, and mobile devices.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    categories: ["design", "development"],
    featured: true,
    image: hunt,
    // images: [huntAlt],
    liveLink: "https://sabbirhossain-dev.github.io/Hunt/",
    codeLink: "https://github.com/sabbirhossain-dev/Hunt.git",
    features: [
      "Modern layout with service showcases",
      "Intuitive navigation",
      "Responsive design",
    ],
  },
  {
    id: "gymnasium",
    title: "Gymnasium Website",
    desc: "Gymnasium is a responsive fitness website designed to showcase workout programs, training services, and membership options through an engaging and accessible interface. The website organizes fitness-related information into clear sections so visitors can explore available programs, learn about membership plans, and understand the services offered. Developed with HTML5, CSS3, JavaScript, jQuery, and Bootstrap, the project combines responsive layouts with interactive elements to improve the browsing experience. Bootstrap supports consistent page structure across different devices, while custom styling creates a fitness-focused visual presentation. The project emphasizes responsive front-end development, structured content, and user-friendly navigation to make fitness information easy to explore on both desktop and mobile screens.",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    categories: ["design", "development"],
    featured: true,
    image: gym,
    // images: [gymAlt],
    liveLink: "https://sabbirhossain-dev.github.io/Gym-by-sabbir/",
    codeLink: "https://github.com/sabbirhossain-dev/Gym-by-sabbir.git",
    features: [
      "Membership plans display",
      "Training programs section",
      "Engaging user interface",
    ],
  },
  {
    id: "learning-website",
    title: "Learning Website",
    desc: "This educational website interface was designed to present learning resources and course-related information in a clear, structured, and user-friendly format. The layout focuses on making educational content easy to discover by organizing courses, learning materials, and supporting information into accessible sections. Developed using HTML5, CSS3, JavaScript, and Bootstrap, the project demonstrates responsive layout techniques, consistent styling, and interactive front-end behavior. Bootstrap helps the interface adapt to different screen sizes, while HTML and CSS establish a clear content hierarchy and visual structure. The project focuses on educational content presentation, intuitive navigation, and responsive design, providing a foundation that could be expanded into a more complete learning platform with course enrollment, student accounts, and progress tracking in the future.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    categories: ["design"],
    featured: false,
    image: gyan,
    // images: [gyanAlt],
    liveLink: "",
    codeLink: "",
    features: [
      "Course presentation layout",
      "Learning resources section",
      "User-friendly navigation",
    ],
  },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);
