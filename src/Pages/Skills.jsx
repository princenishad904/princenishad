import React from "react";
import SkillsImage from "../assets/skills.png";

const Skills = () => {
  return (
    <div id="skills" className="w-11/12 max-lg:w-full  mx-auto p-3">
      <h1 className="text-2xl text-center py-3  text-purple-600">My Skills</h1>
      <div className="w-full">
        <section className="w-full flex justify-center gap-4 flex-wrap">
          <ul className=" w-72 p-3 shadow-lg hover:scale-105 transition cursor-pointer rounded-xl bgImage">
            <h2 className="text-2xl text-gray-100">Language</h2>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
          <ul className=" w-72 p-3 shadow-lg hover:scale-105 transition cursor-pointer rounded-xl bgImage2">
            <h2 className="text-2xl text-gray-100">Tools</h2>
            <li>Git</li>
            <li>Github</li>
            <li>Firebase</li>
          </ul>
          <ul className=" w-72 p-3 shadow-lg hover:scale-105 transition cursor-pointer rounded-xl bgImage3">
            <h2 className="text-2xl text-gray-100">FRAMEWORK / LIBRARY</h2>
            <li>React js</li>
            <li>Redux</li>
            <li>Tailwind css</li>
            <li>Bootstrap</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
