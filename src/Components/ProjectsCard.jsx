import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsCard = ({
  poster,
  title,
  liveLink,
  codeLink,
  decription,
  madeBy,
}) => {
  return (
    <div className="w-72 max-sm:w-11/12 p-2 border rounded-md overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition">
      <div className="full">
        <img src={poster} alt="project Image" className="rounded-xl" />
      </div>
      <div>
        <h1 className="my-2 text-xl">{title}</h1>

        <div className="my-3">
          <div className="flex flex-wrap gap-2">
            {madeBy.map((items) => (
              <span
                className="border rounded-full py-1 px-2 text-sm text-gray-500"
                key={items}
              >
                {items}
              </span>
            ))}
          </div>
          <p className="py-2">{decription}</p>
        </div>

        <div className="flex gap-4 my-2">
          <a href={liveLink} target="_blank">
            <button className="py-1 px-2 rounded-md bg-purple-600 text-white">
              Live
            </button>
          </a>
          <a href={codeLink} target="_blank">
            <button className="py-1 px-2 rounded-md bg-blue-600 text-white">
              Source code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
