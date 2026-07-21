import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./SecurityCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function SecurityCard({className, title, description, icon, isActive, isPrev, isNext, paySistem}) {
  return (
    <div
      className={classNames(
        styles.securityCard,
        isActive && styles.securityCard_active,
        isPrev && styles.securityCard_prev,
        isNext && styles.securityCard_next,
        className,
      )}
    >
      <div className={styles.securityCard__header}>
        <h5 className={styles.securityCard__title}>{title}</h5>
        <Picture imgAttr={icon} />
      </div>
      <p className={styles.securityCard__description}>{description}</p>
      {paySistem && (
        <div className={styles.securityCard__children}>
          {paySistem.map((img, index) => (
            <div className={styles.securityCard__paySistem}>
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
