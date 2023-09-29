import styles from "../css/ColorToggleButton.module.css";
import { useState, useEffect } from "react";

const ColorToggleButton = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (checked) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [checked]);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`${styles.track} ${checked ? styles.on : styles.off}`}
      onClick={handleClick}
    >
      <div
        className={`${styles.handle} ${checked ? styles.on : styles.off}`}
      ></div>
    </div>
  );
};

export default ColorToggleButton;
