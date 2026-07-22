import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ResultCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function ResultCard({className, title, image, subtitle, subtitleBold, left, index}) {
  return (
    <div className={classNames(styles.resultCard, styles[`resultCard_${index}`], className)}>
      <div className={styles.resultCard__imgWrap}>
        <Picture {...image} />
      </div>

      <div className={styles.resultCard__text}>
        <h5 className={classNames(styles.resultCard__title, left && styles.resultCard__title_left)}>
          {title.number && title.number}{" "}
          {title.text && <span className={styles.resultCard__title_sm}>{title.text}</span>}
        </h5>
        <p className={styles.resultCard__subtitle}>
          {subtitle}
          {subtitleBold && <span className={styles.resultCard__subtitle_bold}>{subtitleBold}</span>}
        </p>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleBold: PropTypes.string,
  left: PropTypes.bool,
};
