import styles from "../css/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/swiper-bundle.css";
import SliderItem from "./SliderItem";

import icons from "devicon"; //important

const techData = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-plain colored" },
  { name: "Jest", icon: "devicon-jest-plain colored" },
  { name: "Webpack", icon: "devicon-webpack-plain colored" },
];

SwiperCore.use([Autoplay, Navigation, FreeMode]);

function Slider() {
  return (
    <div className={styles.container}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ffffff",
          "--swiper-navigation-sides-offset": "0px",
        }}
        spaceBetween={1}
        slidesPerView={6}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        navigation
        freeMode={true}
        speed={300}
      >
        {techData.map((tech, index) => (
          <SwiperSlide key={index}>
            <SliderItem icon={tech.icon} name={tech.name} num={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
