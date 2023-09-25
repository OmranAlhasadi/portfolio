import styles from "../css/AnimatedButton.module.css";

const AnimatedButton = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 84.000000 84.000000"
        >
          <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)">
            <path
              d="M70 780 l0 -50 297 0 298 0 -330 -330 -329 -329 29 -31 c16 -16 34 -30 39 -30 6 0 155 144 331 320 l320 320 5 -287 5 -288 50 0 50 0 3 378 2 377 -385 0 -385 0 0 -50z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedButton;
