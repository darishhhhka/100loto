import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./DownloadApp.module.scss";
import {downloadApp} from "@/constants/copyright";
import DownloadAppCard from "@/components/downloadAppCard/DownloadAppCard";
import Title from "@/components/title/Title";
import DownloadStoreCard from "@/components/downloadStoreCard/DownloadStoreCard";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function DownloadApp({className, children}) {
  return (
    <section id="apps" className={classNames(styles.downloadApp, className)}>
      <Title color="red">{downloadApp.title}</Title>
      <div className={styles.downloadApp__content}>
        <div className={styles.downloadApp__info}>
          <div className={styles.downloadApp__cardList}>
            {downloadApp.cardList.map((card, index) => (
              <DownloadAppCard key={`download-add-card-${index}`} icon={card.icon} description={card.description} />
            ))}
          </div>
          <div className={styles.downloadApp__storeList}>
            {downloadApp.storeList.map((store, index) => (
              <DownloadStoreCard key={`download-store-${index}`} {...store} />
            ))}
          </div>
        </div>
        <Picture
          attr={{className: styles.downloadApp__img}}
          imgAttr={downloadApp.phoneImg.img}
          sourceData={downloadApp.phoneImg.sourceData}
        />
      </div>
    </section>
  );
}

DownloadApp.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
