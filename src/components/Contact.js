import styles from "../css/Contact.module.css";
import AnimatedButton from "./AnimatedButton";

import icons from "devicon";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.icon1} devicon-github-plain`}></div>
      <div className={`${styles.icon2} devicon-linkedin-plain`}></div>
      <form action="">
        <input
          type="text"
          placeholder="Name..."
          className={styles.name}
        ></input>
        <input
          type="email"
          placeholder="Email..."
          className={styles.email}
        ></input>
        <textarea
          placeholder="Message..."
          className={styles.message}
        ></textarea>

        <div className={styles.buttonWrapper}>
          <AnimatedButton text={"Send"} border={true} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
