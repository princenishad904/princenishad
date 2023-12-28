import React from "react";
import ProjectsCard from "../Components/ProjectsCard";
import ProjectData from "../ProjectsData/Projects.json";

const Projects = () => {
  return (
    <div id="project" className="w-full mt-6">
      <h1 className="text-2xl text-center py-3">
        Check out my some of Projects
      </h1>

      <div className="w-11/12 mx-auto flex justify-center gap-4 flex-wrap">
        {ProjectData.map((items) => {
          return (
            <ProjectsCard
              key={items.id}
              poster={items.poster}
              title={items.title}
              liveLink={items.liveLink}
              codeLink={items.codeLink}
              decription={items.decription}
              madeBy={items.madeBy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;