import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./MoreWinners.module.scss";
import {moreWinners} from "@/constants/copyright";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";
import Ntv from "@/components/ntv/Ntv";
import CustomButton from "@/components/customButton/CustomButton";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function MoreWinners({className, children}) {
  const stars = [];

  for (let i = 0; i < 4; i++) {
    stars.push(
      <div className={classNames(styles.moreWinners__bgItem, styles[`moreWinners__item_${i}`])}>
        <Picture imgAttr={{...moreWinners.star.imgAttr, className: styles.moreWinners__img}} />
      </div>,
    );
  }

  return (
    <div className={classNames(styles.moreWinners, className)}>
      <div className={styles.moreWinners__bg}>
        <div className={styles.moreWinners__cosmosBg}>
          <Picture
            imgAttr={{...moreWinners.bgImg.img, className: styles.moreWinners__cosmosImg}}
            sourceData={moreWinners.bgImg.sourceData}
          />
        </div>

        <div className={classNames(styles.moreWinners__hatCosmonaut, styles.moreWinners__bgItem)}>
          <Picture imgAttr={{...moreWinners.hatCosmonaut, className: styles.moreWinners__img}} />
        </div>
        {stars}
      </div>
      <div className={styles.moreWinners__content}>
        <Title className={styles.moreWinners__title} color="white">
          {moreWinners.title}
        </Title>
        <div className={styles.moreWinners__content}>
          <CustomButton className={styles.moreWinners__btn}>
            <a href={moreWinners.button.href} className={styles.moreWinners__btnLink}>
              {moreWinners.button.text}
            </a>
          </CustomButton>
          <Ntv className={styles.moreWinners__ntv} />
        </div>
      </div>
    </div>
  );
}

MoreWinners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
