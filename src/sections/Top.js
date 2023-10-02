import Hero from "../components/Hero";
import Slider from "../components/Slider";

import Divider from "../components/Divider";
import Section from "../components/Section";
import Header from "../components/Header";

import styles from "../css/Top.module.css";

const Top = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Divider />
      <Section num={"01."} title={"About"}>
        <p>
          Growing up, I always had an affinity for everything tech related.
          Jailbreaking my first iPod, installing custom ROMs on my android
          phones (and nearly bricking them) or modding my gaming consoles were
          some of the things that developed my problem solving skills
        </p>
        <p>
          Today I'm enthralled by web development. Creating new experiences,
          implementing eye pleasing designs and making them come to life with
          animation is what I do best.
        </p>
      </Section>
      <Slider />
    </div>
  );
};

export default Top;
