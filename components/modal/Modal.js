import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Modal.module.scss";
import {createPortal} from "react-dom";

export default function Modal({className, children, isOpen, setIsOpen}) {
  return createPortal(
    <div className={classNames(styles.modal, isOpen && styles.modal_active, className)}>{children}</div>,
    document.body,
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
