import styles from "../css/Section.module.css";

const Section = ({ num, title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.num}>{num}</div>
        <div className={styles.title}>{title} </div>
      </div>
      {children}
    </div>
  );
};

export default Section;
