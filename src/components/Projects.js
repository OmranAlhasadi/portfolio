import styles from "../css/Projects.module.css";
import Project from "./Project";

import easyGains from "../images/easyGains2.jpeg";
import etch from "../images/etch2.png";
import rps from "../images/RPS.png";
import Divider from "./Divider";
import Section from "./Section";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Project img={easyGains} title="EasyGains" noButtons={true}>
        <p>
          EasyGains is a macronutrient and calories logger that is specifically
          catered for Bodybuilders. It calculates how many calories and macros
          you need in a day to bulk or cut depending on you body parameters and
          goal.
        </p>
        <p>
          it also uses AI so the user can log their food with the press of a
          button by taking a picture instead of searching.
        </p>
        <Divider />
        <i>Built using Python, Dart and firebase</i>
      </Project>
      <Project
        img={etch}
        title="Etch-a-Sketch"
        alternate={true}
        link1={"https://omranalhasadi.github.io/etch-a-sketch/"}
        link2={"https://github.com/OmranAlhasadi/etch-a-sketch"}
      >
        <p>
          A fun etch-a-sketch made using vanilla js when I was learning. you can
          color, erase, reset, choose the grid dimensions and has a random
          rainbow mode.{" "}
        </p>
        <p>
          Please use google chrome when viewing it since I used chrome webkits
          in styling it which will break in other browsers
        </p>
        <Divider />
        <i>Built using HTML, CSS, Javascript </i>
      </Project>
      <Project
        img={rps}
        title="RPS"
        link1={"https://omranalhasadi.github.io/rock-paper-scissors/"}
        link2={"https://github.com/OmranAlhasadi/rock-paper-scissors"}
      >
        <p>
          A Rock-Paper-Scissors game I made while learning vanilla JS. it is a
          first to 5 wins against a random choice computer opponent
        </p>
        <Divider />
        <i>Built using HTML, CSS, Javascript </i>
      </Project>
    </div>
  );
};

export default Projects;
