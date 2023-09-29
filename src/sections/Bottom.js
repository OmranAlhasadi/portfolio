import styles from "../css/Bottom.module.css";

import Section from "../components/Section";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Bottom = () => {
  return (
    <div className={styles.container}>
      <Section num={"03."} title={"Contact Me"}>
        <p>
          I am always looking for new opportunities so please feel free to
          contact me at <strong>omranelhasadi@gmail.com</strong> or use The form
          below:
        </p>
      </Section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Bottom;
