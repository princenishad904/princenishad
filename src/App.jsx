import React, { useState } from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { IoIosArrowUp } from "react-icons/io";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";

function App() {
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
      <Projects />
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
