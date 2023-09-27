import styles from "../css/HomePage.module.css";
import { useEffect } from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

import Divider from "../components/Divider";
import Projects from "../components/Projects";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Contact from "../components/Contact";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("dark");

    return () => {
      // Remove the class when the component unmounts
      document.body.classList.remove("dark");
    };
  }, []);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root autoRaf={true}>
      <div className={styles.pageContainer}>
        <Hero />
        <Divider />
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
        <Section num={"02."} title={"Projects"}>
          <p>
            These are past projects I made that I poured my heart and soul into
          </p>
        </Section>

        <Projects />
        <Section num={"03."} title={"Contact Me"}>
          <p>
            I am always looking for new opportunities so please feel free to
            contact me at <strong>omranelhasadi@gmail.com</strong> or use The
            form below:
          </p>
        </Section>
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default HomePage;
