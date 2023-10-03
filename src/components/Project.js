import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/Project.module.css";
import ProjectInfo from "./ProjectInfo";

gsap.registerPlugin(ScrollTrigger);

const Project = ({
  img,
  title,
  children,
  alternate,
  link1,
  link2,
  noButtons = false,
}) => {
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(shadowRef.current, {
      yPercent: 25,
      ease: "none",
    }).to(
      infoRef.current,
      {
        yPercent: -100,
        ease: "none",
      },
      0
    );

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.innerWrapper}>
        <div
          className={`${styles.shadow} ${
            alternate ? styles.alternateShadow : ""
          }`}
          ref={shadowRef}
        ></div>
        <div
          className={`${styles.image} ${
            alternate ? styles.alternateImage : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div
          className={`${styles.info} ${alternate ? styles.alternateInfo : ""}`}
          ref={infoRef}
        >
          <ProjectInfo
            title={title}
            alternate={alternate}
            link1={link1}
            link2={link2}
            noButtons={noButtons}
          >
            {children}
          </ProjectInfo>
        </div>
      </div>
    </div>
  );
};

export default Project;
