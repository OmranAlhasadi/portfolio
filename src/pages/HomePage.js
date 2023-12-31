import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/HomePage.module.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Top from "../sections/Top";
import Middle from "../sections/Middle";
import Bottom from "../sections/Bottom";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const pageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: middleRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        contentContainerRef.current.classList.add("partialDark");
      },
      onLeaveBack: () =>
        contentContainerRef.current.classList.remove("partialDark"),
    });

    gsap.to(contentContainerRef.current, {
      scaleX: 0.9,

      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <ReactLenis root autoRaf={true}>
      <div className={styles.pageContainer} ref={pageContainerRef}>
        <Header />
        <div
          className={styles.contentContainer}
          style={{ width: "100%" }}
          ref={contentContainerRef}
        >
          <div className={styles.contentWrapper}>
            <Top />
            <div className={styles.middleContainer} ref={middleRef}>
              <Middle />
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer} ref={bottomRef}>
          <Bottom />
        </div>
      </div>
    </ReactLenis>
  );
};

export default HomePage;
