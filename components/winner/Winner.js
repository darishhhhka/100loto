import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winner.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function Winner({className, name, prize, img, isPrev, isNext}) {
  return (
    <div className={classNames(styles.winner, (isPrev || isNext) && styles.winner_prev, className)}>
      <Picture imgAttr={{...img, className: styles.winner__img}} />
      <span className={styles.winner__name}>{name}</span>
      <span className={styles.winner__prize}>{prize}</span>
    </div>
  );
}

Winner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  prize: PropTypes.string,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
};
