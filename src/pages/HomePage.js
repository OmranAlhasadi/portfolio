import styles from "../css/HomePage.module.css";
import { useEffect } from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import ProjectInfo from "../components/ProjectInfo";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("dark");

    return () => {
      // Remove the class if needed when the component unmounts
      document.body.classList.remove("dark");
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Hero />
      <Section num={"01."} title={"About"}>
        <div>wooooooooooooooooooooo</div>
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
      <ProjectInfo title={"EasyGains"}>
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
      </ProjectInfo>
    </div>
  );
};

export default HomePage;
