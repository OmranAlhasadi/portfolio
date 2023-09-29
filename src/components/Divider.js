import React from "react";
import PropTypes from "prop-types";

import styles from "../css/Divider.module.css";

const Divider = ({ thickness, margin, width }) => {
  const style = {
    borderBottom: `${thickness}px solid var(--divider-color, #fff)`,
    margin: margin,
    width: width,
  };

  return <div className={styles.divider} style={style}></div>;
};

Divider.propTypes = {
  thickness: PropTypes.number,
  margin: PropTypes.string,
  width: PropTypes.string,
};

Divider.defaultProps = {
  thickness: 1,
  margin: "0px 0",
  width: "100%",
};

export default Divider;
