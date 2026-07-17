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
      <Header className={styles.intro__header} />
      <div className={styles.intro__content}>
        <div className={styles.intro__imgBlock}>
          <Picture imgAttr={{...intro.imgMen.img, className: styles.intro__img}} sourceData={intro.imgMen.sourceData} />
        </div>
        <div className={styles.intro__info}>
          <h1 className={styles.intro__title}>{intro.title}</h1>
          <div className={styles.intro__prizes}>
            {intro.content.map((priz, index) => (
              <div className={classNames(styles.intro__priz, priz.style && styles[priz.style])}>
                <Picture
                  attr={{className: styles.intro__triangle}}
                  imgAttr={intro.triangleIcon.img}
                  sourceData={intro.triangleIcon.sourceData}
                />
                {priz.priz.map((text, index) => (
                  <p className={classNames(text.style && styles[text.style], styles.intro_paddingLeft)}>{text.text}</p>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.intro_paddingLeft}>
            <Button className={styles.intro__btn}>{intro.button.text}</Button>
            <Ntv />
          </div>
        </div>
      </div>

      {/*<div className={styles.intro__content}>*/}
      {/*  <div className={styles.intro__contentLeft}>*/}
      {/*    <div className={styles.intro_bg_red}></div>*/}
      {/*    <h1 className={styles.intro__title}>{intro.title}</h1>*/}
      {/*    <div className={styles.intro__list}>*/}
      {/*      {intro.list.map(t => (*/}
      {/*        <div className={classNames(styles.intro__wrapItem, t.style && styles[t.style])}>*/}
      {/*          <div className={classNames(styles.intro__itemText)}>*/}
      {/*            {t.content.map(c => (*/}
      {/*              <span className={classNames(styles.intro__text, c.style && styles[c.style])}>{c.text}</span>*/}
      {/*            ))}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <Button className={styles.intro__btn}>{intro.button.text}</Button>*/}
      {/*    <Ntv />*/}
      {/*  </div>*/}
      {/*  <div className={styles.intro__contentRight}>*/}
      {/*    <div className={styles.intro_bg_img}></div>*/}
      {/*    <img className={styles.intro__menImg} src={"/static/images/men.png"} alt="intro-men" />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
