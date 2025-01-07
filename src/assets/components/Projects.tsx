import projectsData from "../data/projectsData.ts";
import Project from "./Project";
import { css } from "../../../styled-system/css/css";

function Projects() {
  return (
    <section id="projects">
      <h2 className={css({ fontSize: "30px", fontWeight: "bold", mb: "15px" })}>
        My Projects
      </h2>
      <div
        className={css({
          display: "flex",
          alignItems: "stretch",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "50px 30px",
          
        })}>
        {projectsData.map((projectData) => {
          return <Project data={projectData} key={projectData.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
