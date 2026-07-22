import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import Header from "@/components/header/Header";
import {intro} from "@/constants/copyright";
import Button from "@/components/button/Button";
import Ntv from "@/components/ntv/Ntv";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import CustomButton from "@/components/customButton/CustomButton";

export default function Intro({className, children}) {
  return (
    <div className={classNames(styles.intro, className)}>
      <div className={styles.intro__bg}>
        <div className={styles.intro__redBg}>
          <Picture imgAttr={intro.imgPattern.img} />
        </div>
        <div className={styles.intro__cosmos}>
          <Picture imgAttr={{...intro.imgCosmos.img, className: styles.intro__imgCosmos}} />
        </div>
        <div className={styles.intro__rocket}>
          <Picture imgAttr={intro.imgRocket.img} />
        </div>
        <div className={styles.intro__car}>
          <Picture imgAttr={intro.imgCar.img} />
        </div>
        <div className={styles.intro__men}>
          <Picture imgAttr={intro.imgMen.img} sourceData={intro.imgMen.sourceData} />
        </div>
      </div>
      <Header className={styles.intro__header} />
      <div className={styles.intro__content}>
        {/*<div className={styles.intro__imgBlock}>*/}
        {/*  <Picture imgAttr={{...intro.imgMen.img, className: styles.intro__img}} sourceData={intro.imgMen.sourceData} />*/}
        {/*</div>*/}
        <div className={styles.intro__info}>
          <h1 className={styles.intro__title}>{intro.title}</h1>
          <div className={styles.intro__prizes}>
            {intro.content.map((priz, index) => (
              <div className={classNames(priz.style && styles[priz.style], styles.intro__priz)}>
                <div className={styles.intro__posTriangle}>
                  <Picture
                    attr={{className: styles.intro__triangle}}
                    imgAttr={intro.triangleIcon.img}
                    sourceData={intro.triangleIcon.sourceData}
                  />
                  <p className={classNames(priz.priz[0].style && styles[priz.priz[0].style], styles.intro_paddingLeft)}>
                    {priz.priz[0].text}
                  </p>
                </div>
                {priz.priz.map(
                  (text, indexPrize) =>
                    indexPrize !== 0 && (
                      <p className={classNames(text.style && styles[text.style], styles.intro_paddingLeft)}>
                        {text.text}
                      </p>
                    ),
                )}
              </div>
            ))}
          </div>
          <div className={styles.intro_paddingLeft}>
            <CustomButton className={styles.intro__btn} href={intro.button.href}>
              {intro.button.text}
            </CustomButton>
            <Ntv className={styles.intro__ntv} />
          </div>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
