import styles from "../css/Projects.module.css";
import Project from "./Project";

import easyGains from "../images/easyGains2.jpeg";
import etch from "../images/etch2.png";
import Divider from "./Divider";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Project img={easyGains} title="EasyGains">
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
        <Divider />
        <i>Built using Python, Dart and firebase</i>
      </Project>
      <Project img={etch} title="Etch-a-Sketch">
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
      </Project>
      <Project img={easyGains} title="EasyGains 2">
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
      </Project>
    </div>
  );
};

export default Projects;
