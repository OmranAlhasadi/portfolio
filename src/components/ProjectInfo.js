import styles from "../css/ProjectInfo.module.css";
import AnimatedButton from "./AnimatedButton";

const ProjectInfo = ({ title, children, alternate }) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.title} ${alternate ? styles.alternateTitle : ""}`}
      >
        {title}
      </div>
      <div className={styles.infoContainer}>
        {children}
        <div className={styles.buttonsContainer}>
          <AnimatedButton text={"Live Site"} />
          <AnimatedButton text={"Github"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
