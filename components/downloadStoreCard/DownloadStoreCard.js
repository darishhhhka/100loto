import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./DownloadStoreCard.module.scss";

export default function DownloadStoreCard({className, icon, forPhone, phone}) {
  return (
    <div className={classNames(styles.downloadStoreCard, className)}>
      <div className={styles.downloadStoreCard__img}>
        <img {...icon} />
      </div>
      <div className={styles.downloadStoreCard__info}>
        <span className={styles.downloadStoreCard__forPhone}>{forPhone}</span>
        <span className={styles.downloadStoreCard__phone}>{phone}</span>
      </div>
    </div>
  );
}

DownloadStoreCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  forPhone: PropTypes.string,
  phone: PropTypes.string,
};
