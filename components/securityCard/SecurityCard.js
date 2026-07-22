import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./SecurityCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function SecurityCard({
  className,
  title,
  description,
  icon,
  isActive,
  isPrev,
  isNext,
  paySistem,
  index,
}) {
  return (
    <div
      className={classNames(
        styles.securityCard,
        isActive && styles.securityCard_active,
        isPrev && styles.securityCard_prev,
        isNext && styles.securityCard_next,
        styles[`securityCard_${index}`],
        className,
      )}
    >
      <div className={styles.securityCard__header}>
        <h5 className={styles.securityCard__title}>{title}</h5>
        <div className={styles.securityCard__img}>
          <Picture imgAttr={icon} />
        </div>
      </div>
      <p className={styles.securityCard__description}>{description}</p>
      {paySistem && (
        <div className={styles.securityCard__children}>
          {paySistem.map((img, index) => (
            <div className={classNames(styles.securityCard__paySistem, styles[`securityCard__paySistem_${index}`])}>
              <Picture imgAttr={img} key={`security-card-img-${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SecurityCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
