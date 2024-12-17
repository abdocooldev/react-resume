import styles from "../styles/styles.module.css";
import todoImg from "../images/todo-app-project.png";
function Projects() {
  return (
    <section id={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src={todoImg} alt="Todo App Project" loading="lazy" />
        </div>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectName}>Todo App</h3>
          <div className={styles.techStack}>
            <span>React</span>
            <span>Sass</span>
            <span>CSS Modules</span>
            <span>Beautiful DnD</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
