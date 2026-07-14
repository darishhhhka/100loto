import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./DownloadAppCard.module.scss";

export default function DownloadAppCard({className, icon, description}) {
  return (
    <div className={classNames(styles.downloadAppCard, className)}>
      <img className={styles.downloadAppCard__img} {...icon} />
      <p className={styles.downloadAppCard__description}>{description}</p>
    </div>
  );
}

DownloadAppCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  description: PropTypes.string,
};
