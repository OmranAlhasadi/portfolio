import styles from "../css/Project.module.css";
import ProjectInfo from "./ProjectInfo";

const Project = ({ img, title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shadow}></div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.info}>
        <ProjectInfo title={title}>{children}</ProjectInfo>
      </div>
    </div>
  );
};

export default Project;
