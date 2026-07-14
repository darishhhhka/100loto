import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ResultCard.module.scss";

export default function ResultCard({className, title, img, subtitle, subtitleBold}) {
  return (
    <div className={classNames(styles.resultCard, className)}>
      <img className={styles.resultCard__img} {...img} />
      <div>
        <h5 className={styles.resultCard__title}>{title}</h5>
        <p classNmae={styles.resultCard__subtitle}>
          {subtitle}
          {subtitleBold && <span className={styles.resultCard__subtitle_bold}>{subtitleBold}</span>}
        </p>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
