import styles from "../css/Contact.module.css";
import AnimatedButton from "./AnimatedButton";

import icons from "devicon";

const Contact = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.iconLink1}
        href="https://github.com/OmranAlhasadi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${styles.icon1} devicon-github-plain`}></div>
      </a>
      <a
        className={styles.iconLink2}
        href="https://www.linkedin.com/in/omran-alhasadi-a1765b283/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${styles.icon2} devicon-linkedin-plain`}></div>
      </a>
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
