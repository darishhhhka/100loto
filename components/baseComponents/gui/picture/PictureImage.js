import React from "react";
import PropTypes from "prop-types";
import styles from "./PictureImage.module.scss";

export default function PictureImage({imgAttr} = {}) {
  return <img className={styles.img} {...{alt: "img", ...imgAttr}} />;
}

PictureImage.propType = {
  imgAttr: PropTypes.any,
};
