import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import ProjectDetails from "./components/projectDetails/ProjectDetails";
import Loading from "./components/Loading";
// import CustomCursor from "./components/CustomCursor";

const Main = () => {
  const location = useLocation();

  // Supports navigate("/", { state: { scrollTo: "sectionId" } }) from other pages
  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      {/* <CustomCursor /> */}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HashRouter>
          <div className="w-full h-auto bg-[#0B1120] text-lightText ">
            <div className="px-5 sm:px-8 md:px-6 lg:max-w-screen-xl mx-auto lg:px-5">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
            </div>
          </div>
        </HashRouter>
      )}
    </>
  );
};

export default App;
