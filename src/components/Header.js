import styles from "../css/Header.module.css";
import ColorToggleButton from "./ColorToggleButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className={styles.spacer}></div>
      <div className={styles.container}>
        <div className={styles.logo}>{/*<Logo />*/}</div>
        <div className={styles.nav}>
          <ColorToggleButton />
        </div>
      </div>
    </>
  );
};

export default Header;
