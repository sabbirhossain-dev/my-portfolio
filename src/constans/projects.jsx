import grocery from "../assets/images/grocery2.png";
// import groceryAlt from "../assets/images/grocery1.png";
import forever from "../assets/images/foreverrr.png";
// import foreverAlt from "../assets/images/foreverr.png";
// import foreverPhone from "../assets/images/foreverphn.png";
// import personalWebsite from "../assets/images/personalWebsite.png";
// import bizzency from "../assets/images/bizzency2.png";
// import bizzencyAlt from "../assets/images/bizzency.png";
// import hunt from "../assets/images/hunt3.png";
// import huntAlt from "../assets/images/hunt2.png";
// import gym from "../assets/images/gym.png";
// import gymAlt from "../assets/images/gym2.png";
// import gyan from "../assets/images/gyan2.png";
// import gyanAlt from "../assets/images/Gyan.png";

import newsDesk from "../assets/images/newsDesk.jpg";
import cricketSquad from "../assets/images/squadBuilder.jpg";
import devStack from "../assets/images/devStack.jpg";
import bazarDor from "../assets/images/bazarDor.jpg";

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
    id: "news-desk",
    title: "News Desk - News Web Application",
    desc: "News Desk is a news-focused web application designed to help users explore news content through a clean, organized, and user-friendly interface. The platform aims to make news discovery easier by presenting articles in a structured layout that supports convenient browsing and content exploration. The project focuses on creating a responsive reading experience, maintaining clear content hierarchy, and making important news information accessible across different screen sizes. Its interface is designed to provide a smooth user experience while offering a foundation for expanding news categories, article details, and additional content discovery features.",
    desc1:
      "Developed a news web application focused on organized news presentation, convenient article browsing, and a responsive user interface.",
    techStack: ["Next.js", "Tailwind CSS", "Better Auth", "MongoDB"],
    categories: ["development"],
    featured: true,
    image: newsDesk,
    liveLink: "https://news-desk-steel.vercel.app/",
    codeLink: "https://github.com/sabbirhossain-dev/news-desk.git",
    features: [
      "Organized news content presentation",
      "User-friendly news browsing interface",
      "Responsive layout for different screen sizes",
      "Structured interface for exploring news articles",
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
    categories: ["design"],
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
    id: "cricket-squad-builder",
    title: "Cricket Squad Builder",
    desc: "Cricket Squad Builder is a cricket-themed web application designed to help users explore players and build a team according to their squad preferences. The project focuses on presenting player information in an organized interface and providing an interactive team-building experience. Users can explore available player options and use the application's squad-building workflow to assemble a team. The interface emphasizes clear player presentation, convenient interactions, and responsive layouts, making the application accessible across different devices. The project demonstrates practical front-end development skills through data presentation, interactive UI components, and application state management.",
    desc1:
      "Built an interactive cricket squad-building application for exploring player options and assembling a team through a user-friendly interface.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "React Hooks"],
    categories: ["development"],
    featured: true,
    image: cricketSquad,
    liveLink: "https://cricket-squad-builder-umber.vercel.app/",
    codeLink: "https://github.com/sabbirhossain-dev/Cricket-Squad-Builder.git",
    features: [
      "Player information presentation",
      "Interactive squad-building interface",
      "Team selection workflow",
      "Responsive cricket-themed UI",
    ],
  },
  {
    id: "dev-stack",
    title: "Dev Stack - Developer Resource Platform",
    desc: "Dev Stack is a developer-oriented web project designed to present development-related resources and information through a structured and accessible interface. The application focuses on organizing technical content in a way that helps users explore relevant resources without navigating a cluttered layout. Its design emphasizes clear information presentation, reusable UI elements, and a responsive browsing experience. The project provides an opportunity to demonstrate front-end development practices, including component-based architecture, interface organization, and responsive styling, while offering a foundation for future enhancements such as resource categorization, search functionality, and personalized developer collections.",
    desc1:
      "Created a developer-focused web application for presenting technical resources through an organized, modern, and responsive interface.",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "React Router"],
    categories: ["development"],
    featured: true,
    image: devStack,
    liveLink: "https://dev-stack-pearl.vercel.app/",
    codeLink: "https://github.com/sabbirhossain-dev/Dev-Stack.git",
    features: [
      "Developer-focused content presentation",
      "Organized resource browsing interface",
      "Responsive and reusable UI components",
      "Foundation for expanding developer resources",
    ],
  },
  {
    id: "bazar-dor",
    title: "Bazar Dor - Price Information Web Application",
    desc: "Bazar Dor is a market-oriented web application designed around the idea of making product and market price information easier to explore. The project focuses on presenting information in a clear, organized interface so users can browse relevant items and understand their associated pricing information. Its user interface prioritizes readability, straightforward navigation, and responsive presentation across desktop and mobile devices. The project demonstrates front-end development skills in building a practical, information-focused application, with opportunities for future expansion through improved search, category-based browsing, price comparisons, and regularly updated market information.",
    desc1:
      "Developed a market price information application focused on presenting product pricing details through a clear and responsive interface.",
    techStack: ["Next.js", "Better Auth", "Tailwind CSS", "MongoDB"],
    categories: ["design"],
    featured: true,
    image: bazarDor,
    liveLink: "https://bazar-dor-ten-ecru.vercel.app/",
    codeLink: "https://github.com/sabbirhossain-dev/bazar-dor.git",
    features: [
      "Market and product price information presentation",
      "Organized information browsing",
      "Responsive user interface",
      "Potential for product search and price comparison",
    ],
  },

  //some projects are commented out for now, but can be added back in later if needed

  // {
  //   id: "personal-portfolio",
  //   title: "Personal Portfolio",
  //   desc: "This personal portfolio website was designed and developed to showcase professional skills, technical expertise, selected projects, and development experience in a clear and engaging way. The website features a structured layout that helps visitors explore the portfolio, learn more about the developer, review technical skills, and access project demonstrations and source code. Built with React.js, the application uses reusable components to maintain a consistent design and make future updates easier. Tailwind CSS provides a responsive and visually cohesive interface, while Framer Motion adds subtle animations and transitions that enhance navigation and presentation. The overall design emphasizes readability, accessibility, responsive behavior, and a professional online presence across different screen sizes.",
  //   desc1:
  //     "Designed and developed a personal portfolio showcasing projects, skills, and professional achievements with a clean user interface.",
  //   techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
  //   categories: ["design"],
  //   featured: true,
  //   image: personalWebsite,
  //   // images: [],
  //   liveLink: "https://portfolio-website-pi-lac-81.vercel.app/",
  //   codeLink: "https://github.com/sabbirhossain-dev/portfolio-website.git",
  //   features: [
  //     "Showcase of projects, skills, and achievements",
  //     "Clean dark-themed user interface",
  //     "Animated section transitions",
  //   ],
  // },
  // {
  //   id: "bizzency",
  //   title: "Business Website",
  //   desc: "Bizzency is a modern business website created to present a company's services, brand identity, and professional offerings through a polished and organized interface. The layout is designed to guide visitors through important business information using clearly structured sections, visual elements, and intuitive navigation. Built with HTML5, CSS3, JavaScript, jQuery, and Bootstrap, the website combines responsive layouts with interactive interface elements to provide a consistent browsing experience across different devices. Bootstrap supports the responsive grid and layout structure, while custom styling helps maintain the site's visual identity. The project focuses on front-end development fundamentals, effective content presentation, and creating a professional website suitable for a business-oriented audience.",
  //   techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  //   categories: ["design"],
  //   featured: true,
  //   image: bizzency,
  //   // images: [bizzencyAlt],
  //   liveLink: "https://sabbirhossain-dev.github.io/Bizzency/",
  //   codeLink: "https://github.com/sabbirhossain-dev/Bizzency.git",
  //   features: [
  //     "Modern responsive layout",
  //     "Brand-focused presentation",
  //     "Seamless navigation",
  //   ],
  // },
  // {
  //   id: "hunt",
  //   title: "Business Website",
  //   desc: "Hunt is a responsive business website developed to present services, communicate a brand's value, and help visitors navigate business information efficiently. The website uses a structured layout with dedicated content sections, visual elements, and clear navigation to create an organized browsing experience. Developed using HTML5, CSS3, JavaScript, and Bootstrap, the project demonstrates the use of responsive web design principles and interactive front-end elements. Bootstrap helps maintain consistent layouts across screen sizes, while custom CSS and JavaScript contribute to the site's presentation and behavior. The main focus of the project is to create a visually appealing business interface that balances content hierarchy, usability, and responsive design across desktop, tablet, and mobile devices.",
  //   techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  //   categories: ["design", "development"],
  //   featured: true,
  //   image: hunt,
  //   // images: [huntAlt],
  //   liveLink: "https://sabbirhossain-dev.github.io/Hunt/",
  //   codeLink: "https://github.com/sabbirhossain-dev/Hunt.git",
  //   features: [
  //     "Modern layout with service showcases",
  //     "Intuitive navigation",
  //     "Responsive design",
  //   ],
  // },
  // {
  //   id: "gymnasium",
  //   title: "Gymnasium Website",
  //   desc: "Gymnasium is a responsive fitness website designed to showcase workout programs, training services, and membership options through an engaging and accessible interface. The website organizes fitness-related information into clear sections so visitors can explore available programs, learn about membership plans, and understand the services offered. Developed with HTML5, CSS3, JavaScript, jQuery, and Bootstrap, the project combines responsive layouts with interactive elements to improve the browsing experience. Bootstrap supports consistent page structure across different devices, while custom styling creates a fitness-focused visual presentation. The project emphasizes responsive front-end development, structured content, and user-friendly navigation to make fitness information easy to explore on both desktop and mobile screens.",
  //   techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  //   categories: ["design", "development"],
  //   featured: true,
  //   image: gym,
  //   // images: [gymAlt],
  //   liveLink: "https://sabbirhossain-dev.github.io/Gym-by-sabbir/",
  //   codeLink: "https://github.com/sabbirhossain-dev/Gym-by-sabbir.git",
  //   features: [
  //     "Membership plans display",
  //     "Training programs section",
  //     "Engaging user interface",
  //   ],
  // },
  // {
  //   id: "learning-website",
  //   title: "Learning Website",
  //   desc: "This educational website interface was designed to present learning resources and course-related information in a clear, structured, and user-friendly format. The layout focuses on making educational content easy to discover by organizing courses, learning materials, and supporting information into accessible sections. Developed using HTML5, CSS3, JavaScript, and Bootstrap, the project demonstrates responsive layout techniques, consistent styling, and interactive front-end behavior. Bootstrap helps the interface adapt to different screen sizes, while HTML and CSS establish a clear content hierarchy and visual structure. The project focuses on educational content presentation, intuitive navigation, and responsive design, providing a foundation that could be expanded into a more complete learning platform with course enrollment, student accounts, and progress tracking in the future.",
  //   techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  //   categories: ["design"],
  //   featured: false,
  //   image: gyan,
  //   // images: [gyanAlt],
  //   liveLink: "",
  //   codeLink: "",
  //   features: [
  //     "Course presentation layout",
  //     "Learning resources section",
  //     "User-friendly navigation",
  //   ],
  // },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);
