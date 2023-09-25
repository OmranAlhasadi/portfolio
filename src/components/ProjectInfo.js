import styles from "../css/ProjectInfo.module.css";
import AnimatedButton from "./AnimatedButton";

const ProjectInfo = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
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
