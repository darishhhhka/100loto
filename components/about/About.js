import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./About.module.scss";
import Title from "@/components/title/Title";
import {about} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {motion} from "framer-motion";
import PE from "@/components/baseComponents/gui/pElement/PElement";
import {settingsAnimationWhileInView} from "@/components/baseComponents/helpers/transition/animations";

export default function About({className, children}) {
  const svgSetting = [
    {
      viewBox: "0 0 600 250",
      d: "M19 121.001C111 -8.99953 615 -85.9995 594 290C595 363 564.525 497.063 467 443C191 290 41.3336 378.667 1.00004 492C-93 758 178 992.001 585 709.001",
    },
    {
      viewBox: "0 0 600 200",
      d: "M36 -156.999C128 -287 632 -364 611 12.0004C612 85.0004 581.525 219.063 484 165C208 12.0004 58.3336 100.667 18 214C-76 480 195 714.001 602 431.001",
    },
    {
      viewBox: "0 0  600 400",
      d: "M50 -377.999C142 -508 646 -585 625 -209C626 -136 595.525 -1.93689 498 -55.9996C222 -209 72.3336 -120.333 32 -6.99963C-62 259 209 493.001 616 210.001",
    },
  ];

  return (
    <section className={classNames(styles.about, className)}>
      <div className={styles.about__bg}></div>
      <div className={styles.about__wrap}>
        <div className={styles.about__sputnik}>
          <Picture imgAttr={{...about.img, className: styles.about__sputnikImg}} />
        </div>
        <Title color="red">{about.title}</Title>
        <div className={styles.about__list}>
          {about.steps.map((step, indexStep) => (
            <div
              className={classNames(
                styles.about__step,
                styles[`about__step_${indexStep}`],
                indexStep % 2 === 0 ? styles.about__step_left : styles.about__step_right,
              )}
              key={`about-step-${indexStep}`}
            >
              {indexStep < 3 && (
                <motion.div
                  className={classNames(
                    styles.about__lineWrap,
                    indexStep % 2 === 0 ? styles.about__lineWrap_right : styles.about__lineWrap_left,
                    styles[`about__lineWrap_${indexStep}`],
                  )}
                  initial={{
                    clipPath: `inset(0% ${indexStep % 2 === 0 ? "100%" : "0%"} 0% ${indexStep % 2 !== 0 ? "100%" : "0%"})`,
                  }}
                  whileInView={{clipPath: "inset(0% 0%)"}}
                  transition={{duration: 1.2, delay: indexStep * 1.5}}
                  viewport={{once: true}}
                >
                  {/*<div className={styles.about__svgMask}></div>*/}
                  <svg
                    className={styles.about__line}
                    viewBox={svgSetting[indexStep].viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={svgSetting[indexStep].d}
                      stroke="#FF927A"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-dasharray="9 10"
                    />
                  </svg>
                </motion.div>
              )}

              {indexStep % 2 === 0 && (
                <div className={styles.about__imgWrap}>
                  {step.images.map((image, index) => (
                    <motion.div
                      initial={{scale: 0}}
                      whileInView={{scale: 1}}
                      transition={{duration: 0.5, delay: indexStep}}
                      viewport={{once: true}}
                    >
                      <Picture
                        key={`image-${index}`}
                        {...image}
                        imgAttr={{
                          ...image.img,
                        }}
                        sourceData={image.sourceData}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
              <motion.div
                className={styles.about__info}
                initial={{x: indexStep % 2 === 0 ? 100 : -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: indexStep}}
                viewport={{once: true}}
              >
                <span className={styles.about__number}>{indexStep + 1}.</span>
                <p className={styles.about__text}>
                  {step.text}{" "}
                  {step.link && (
                    <a className={styles.about__text_red} href={step.link.href}>
                      {step.link.label}
                    </a>
                  )}
                </p>
              </motion.div>
              {indexStep % 2 === 1 && (
                <div className={styles.about__imgWrap}>
                  {step.images.map((image, index) => (
                    <motion.div
                      initial={{scale: 0}}
                      whileInView={{scale: 1}}
                      transition={{duration: 1, delay: indexStep}}
                    >
                      <Picture
                        key={`step-img-${index}`}
                        attr={{className: styles.about__img}}
                        imgAttr={image.img}
                        sourceData={image.sourceData}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
