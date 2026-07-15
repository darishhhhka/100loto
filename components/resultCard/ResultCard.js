import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ResultCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function ResultCard({className, title, img, subtitle, subtitleBold}) {
  return (
    <div className={classNames(styles.resultCard, className)}>
      <Picture
        attr={{className: styles.resultCard__imgWrap}}
        imgAttr={{...img.img, className: styles.resultCard__img}}
        sourceData={img.sourceData}
      />

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
