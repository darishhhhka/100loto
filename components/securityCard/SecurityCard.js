import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./SecurityCard.module.scss";

export default function SecurityCard({className, title, description, icon, children}) {
  return (
    <div className={classNames(styles.securityCard, className)}>
      <div className={styles.securityCard__header}>
        <h5 className={styles.securityCard__title}>{title}</h5>
        <img className={styles.securityCard__img} {...icon} />
      </div>

      <p className={styles.securityCard__description}>{description}</p>
      <div className={styles.securityCard__children}>{children}</div>
    </div>
  );
}

SecurityCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
