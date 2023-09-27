import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/Project.module.css";
import ProjectInfo from "./ProjectInfo";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ img, title, children }) => {
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
        markers: true,
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
    ); // 0 ensures that both tweens will start at the same time.

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.shadow} ref={shadowRef}></div>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={styles.info} ref={infoRef}>
          <ProjectInfo title={title}>{children}</ProjectInfo>
        </div>
      </div>
    </div>
  );
};

export default Project;
