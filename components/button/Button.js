import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button({className, children, onClick}) {
  return <button className={classNames(styles.button, className)}>{children}</button>;
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
