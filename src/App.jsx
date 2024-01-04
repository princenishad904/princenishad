import React, { useState, useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { IoIosArrowUp } from "react-icons/io";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Testimonial from "./Pages/Testimonial";
import ContectForm from "./Pages/ContectForm";
import Loader from "./Components/Loader";

function App() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://princenishad904.github.io/prortfolio_projects_v1_api/portfolio_project_api.json"
      );
      const res = await data.json();
      setProjectsData(res);
    })();
  }, []);
  const [scrollToTop, setScrollToTop] = useState("hidden");
  const [navbar, setNavbar] = useState(false);
  window.addEventListener("scroll", () => {
    let scrollTracker = window.pageYOffset;

    if (scrollTracker > 200) {
      setScrollToTop("block");
      setNavbar(true);
    } else {
      setScrollToTop("hidden");
      setNavbar(false);
    }
  });
  return (
    <Layout navbar={navbar}>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects data={projectsData} />
      <Testimonial />
      <ContectForm />
      {projectsData == "" ? <Loader /> : null}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`w-10 h-10 fixed bottom-8 rounded-full right-5 z-10 grid place-items-center text-2xl bg-purple-500 text-white shadow-lg ${scrollToTop}`}
      >
        <IoIosArrowUp />
      </button>
    </Layout>
  );
}
export default App;
