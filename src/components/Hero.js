import React, { useEffect, useState } from "react";
import styles from "../css/Hero.module.css";
import wave from "../images/wave.svg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <svg
          viewBox="0 0 361 429"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <rect width="100%" height="100%" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className={styles.div1}>
        <span
          style={
            loaded
              ? { transform: "translateY(0)", opacity: 1 }
              : { transform: "translateY(100%)", opacity: 0 }
          }
        >
          OMRAN
        </span>
      </div>
      <div className={styles.div2}>
        <span
          style={
            loaded
              ? {
                  transitionDelay: `70ms`,
                  transform: "translateY(0)",
                  opacity: 1,
                }
              : { transform: "translateY(100%)", opacity: 0 }
          }
        >
          ALHASADI
        </span>
      </div>
      <div className={styles.div3}>
        <span
          style={
            loaded
              ? {
                  transitionDelay: `140ms`,
                  transform: "translateY(0)",
                  opacity: 1,
                }
              : { transform: "translateY(100%)", opacity: 0 }
          }
        >
          FULLSTACK
        </span>
      </div>
      <div className={styles.div4}>
        <span
          style={
            loaded
              ? {
                  transitionDelay: `210ms`,
                  transform: "translateY(0)",
                  opacity: 1,
                }
              : { transform: "translateY(100%)", opacity: 0 }
          }
        >
          DEVELOPER
        </span>
      </div>
    </div>
  );
};

export default Hero;
