import React from "react";
import PropTypes from "prop-types";

import styles from "../css/Divider.module.css";

const Divider = ({ color, thickness, margin, width }) => {
  const style = {
    borderBottom: `${thickness}px solid ${color}`,
    margin: margin,
    width: width,
  };

  return <div className={styles.divider} style={style}></div>;
};

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
  margin: PropTypes.string,
  width: PropTypes.string,
};

Divider.defaultProps = {
  color: "#fff",
  thickness: 1,
  margin: "0px 0",
  width: "70%",
};

export default Divider;
