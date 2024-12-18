import styles from "../styles/styles.module.css";

function Project(props) {
  const { id, title, techs, image } = props.data;
  return (
    <div className={styles.project}>
      <div className={styles.projectImg}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectName}>{title}</h3>
        <div className={styles.techStack}>
          {techs.map((tech, i) => {
            return <span key={i}>{tech}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
