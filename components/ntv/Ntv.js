import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Ntv.module.scss";
import {ntv} from "@/constants/copyright";
import Button from "@/components/button/Button";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function Ntv({className}) {
  return (
    <div className={classNames(styles.ntv, className)}>
      <Picture imgAttr={ntv.logo} />
      <p>{ntv.text}</p>
    </div>
  );
}

Ntv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
