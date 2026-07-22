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
import {MouseParallax} from "react-just-parallax";

export default function MoreWinners({className, children}) {
  const stars = [];

  for (let i = 0; i < 4; i++) {
    stars.push(
      <div className={classNames(styles.moreWinners__bgItem, styles[`moreWinners__item_${i}`])}>
        <MouseParallax strength={-0.01 * i}>
          <Picture imgAttr={moreWinners.star.imgAttr} />
        </MouseParallax>
      </div>,
    );
  }

  return (
    <section className={classNames(styles.moreWinners, className)}>
      <div className={styles.moreWinners__bg}>
        <div className={styles.moreWinners__cosmosBg}>
          <Picture
            imgAttr={{...moreWinners.bgImg.img, className: styles.moreWinners__cosmosImg}}
            sourceData={moreWinners.bgImg.sourceData}
          />
        </div>

        <div className={classNames(styles.moreWinners__hatCosmonaut, styles.moreWinners__bgItem)}>
          <MouseParallax strength={-0.01}>
            <Picture imgAttr={{...moreWinners.hatCosmonaut, className: styles.moreWinners__img}} />
          </MouseParallax>
        </div>
        {stars}
      </div>
      <div className={styles.moreWinners__content}>
        <Title className={styles.moreWinners__title} color="white">
          {moreWinners.title}
        </Title>
        <div className={styles.moreWinners__wrap}>
          <CustomButton className={styles.moreWinners__btn}>{moreWinners.button.text}</CustomButton>
          <Ntv className={styles.moreWinners__ntv} />
        </div>
      </div>
    </section>
  );
}

MoreWinners.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
