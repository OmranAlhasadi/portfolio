import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/HomePage.module.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Top from "../sections/Top";
import Middle from "../sections/Middle";
import Bottom from "../sections/Bottom";

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
      onEnter: () => contentContainerRef.current.classList.add("dark"),
      onLeaveBack: () => contentContainerRef.current.classList.remove("dark"),
    });

    gsap.to(contentContainerRef.current, {
      width: "90%",
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
        <div className={styles.contentContainer} ref={contentContainerRef}>
          <div className={styles.contentWrapper}>
            <Top />
            <div ref={middleRef}>
              <Middle />
            </div>
          </div>
        </div>
        <div ref={bottomRef}>
          <Bottom />
        </div>
      </div>
    </ReactLenis>
  );
};

export default HomePage;
