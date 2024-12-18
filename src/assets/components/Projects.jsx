import styles from "../styles/styles.module.css";
import projectsData from "../data/ProjectsData";
import Project from "./Project";

function Projects() {
  return (
    <section id={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.container}>
        {projectsData.map((projectData) => {
          return <Project data={projectData} key={projectData.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
