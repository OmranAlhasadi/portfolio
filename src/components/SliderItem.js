import styles from "../css/SliderItem.module.css";

const SliderItem = ({ icon, name, num }) => {
  return (
    <div className={styles.container}>
      <i className={`${icon} ${styles.icon}`}></i>
      <div className={styles.name}> {name} </div>
      <div className={styles.num}>{num}</div>
    </div>
  );
};

export default SliderItem;
