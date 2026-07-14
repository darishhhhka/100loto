import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Title.module.scss";

export default function Title({className, children, color}) {
  return <h2 className={classNames(styles.title, styles[`title_${color}`], className)}>{children}</h2>;
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
