import Projects from "../components/Projects";
import Section from "../components/Section";

import styles from "../css/Middle.module.css";

const Middle = () => {
  return (
    <div className={styles.container}>
      <Section num={"02."} title={"Projects"}>
        <p>
          These are past projects I made that I poured my heart and soul into
        </p>
      </Section>
      <Projects />
    </div>
  );
};

export default Middle;
