import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import Header from "@/components/header/Header";
import {intro} from "@/constants/copyright";

export default function Intro({className, children}) {
  return (
    <div className={classNames(styles.intro, className)}>
      <div className={styles.intro_bg_red}></div>
      <div className={styles.intro_bg_img}></div>
      <Header />
      <div className={styles.intro__content}>
        <h1 className={styles.intro__title}>{intro.title}</h1>
        <div className={styles.intro__list}>
          {intro.list.map(t => (
            <div className={classNames(styles.intro__wrapItem, t.style && styles[t.style])}>
              <div className={classNames(styles.intro__itemText)}>
                {t.content.map(c => (
                  <span className={classNames(styles.intro__text, c.style && styles[c.style])}>{c.text}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.intro__btn}>{intro.button.text}</button>
        <div className={styles.intro__ntv}>
          <img {...intro.ntv.logo} />
          <p>{intro.ntv.text}</p>
        </div>
      </div>
      <div>
        <img className={styles.intro__menImg} src={"/static/images/intro-men.png"} alt="intro-men" />
      </div>
    </div>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
