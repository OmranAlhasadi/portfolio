import styles from "../css/Projects.module.css";
import Project from "./Project";

import easyGains from "../images/easyGains2.jpeg";
import etch from "../images/etch2.png";
import rps from "../images/RPS.png";
import bubbles from "../images/Bubbles.png";
import Divider from "./Divider";
import Section from "./Section";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Project
        img={bubbles}
        title="Bubbles"
        /* alternate={true} */
        link1={"https://bubbles-mern-15bcc2144c14.herokuapp.com/login"}
        link2={"https://github.com/OmranAlhasadi/bubbles"}
      >
        <p>
          A social media app where you can create posts, upload images, add
          friends...etc.
        </p>
        <p>This is a full stack project to showcase my full stack knowledge</p>
        <Divider />
        <i>Built using MERN stack (Mongo, Express, React and Node) </i>
      </Project>
      <Project
        img={easyGains}
        title="EasyGains"
        alternate={true}
        noButtons={true}
      >
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
    </div>
  );
};

export default Projects;
