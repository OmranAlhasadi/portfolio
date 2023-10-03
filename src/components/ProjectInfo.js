import styles from "../css/ProjectInfo.module.css";
import AnimatedButton from "./AnimatedButton";

const ProjectInfo = ({
  title,
  children,
  alternate,
  link1,
  link2,
  noButtons = false,
}) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.title} ${alternate ? styles.alternateTitle : ""}`}
      >
        {title}
      </div>
      <div className={styles.infoContainer}>
        {children}
        {/* Conditional rendering */}
        {!noButtons && (
          <div className={styles.buttonsContainer}>
            <AnimatedButton text={"Live Site"} link={link1} />
            <AnimatedButton text={"Github"} link={link2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
