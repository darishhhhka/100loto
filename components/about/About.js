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
  return (
    <section className={classNames(styles.about, className)}>
      <div className={styles.about__bg}>
        <div className={styles.about__wrap}>
          {/*<svg*/}
          {/*  className={styles.about__doshed}*/}
          {/*  width="833"*/}
          {/*  height="832"*/}
          {/*  viewBox="0 0 833 832"*/}
          {/*  fill="none"*/}
          {/*  xmlns="http://www.w3.org/2000/svg"*/}
          {/*>*/}
          {/*  <PE.path*/}
          {/*    d="M49.7993 167.122C88.7992 -37.8782 851.799 -103.878 830.799 272.122C831.799 345.122 718.799 484.122 588.799 417.122C293.994 265.184 67.133 330.789 26.7994 444.122C-120.201 815.122 406.799 943.122 734.799 720.122"*/}
          {/*    stroke="#FF927A"*/}
          {/*    stroke-width="3"*/}
          {/*    stroke-linecap="round"*/}
          {/*    stroke-dasharray="9 10"*/}
          {/*    settingsAnimationStates={settingsAnimationWhileInView}*/}
          {/*    initial={{pathLength: 0}}*/}
          {/*   whileInView={{pathLength: 1, transition: {duration: 3, delay: 0.2}}}*/}
          {/*  />*/}
          {/*</svg>*/}

          <svg
            className={styles.about__doshed}
            width="833"
            height="832"
            viewBox="0 0 833 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="bgGradient" cx="50%" cy="70%" r="70%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="40%" stopColor="#fff" />
                <stop offset="100%" stopColor="#ffe4b0" />
              </radialGradient>
            </defs>
            <path
              d="M49.7993 167.122C88.7992 -37.8782 851.799 -103.878 830.799 272.122C831.799 345.122 718.799 484.122 588.799 417.122C293.994 265.184 67.133 330.789 26.7994 444.122C-120.201 815.122 406.799 943.122 734.799 720.122"
              stroke="#FF927A"
              stroke-width="3"
              stroke-linecap="round"
              stroke-dasharray="9 10"
            />

            <motion.path
              d="M49.7993 167.122C88.7992 -37.8782 851.799 -103.878 830.799 272.122C831.799 345.122 718.799 484.122 588.799 417.122C293.994 265.184 67.133 330.789 26.7994 444.122C-120.201 815.122 406.799 943.122 734.799 720.122"
              stroke="url(#bgGradient)"
              stroke-width="4"
              stroke-linecap="round"
              stroke-dasharray="9 10"
              initial={{pathLength: 1}}
              whileInView={{
                pathLength: 0,
                transition: {duration: 3, delay: 0.2},
              }}
            />
          </svg>
          <div className={styles.about__sputnik}>
            <Picture imgAttr={{...about.img, className: styles.about__sputnikImg}} />
          </div>
          <Title color="red">{about.title}</Title>
          <div className={styles.about__list}>
            {about.steps.map((step, index) => (
              <div
                className={classNames(
                  styles.about__step,
                  styles[`about__step_${index}`],
                  index % 2 === 0 ? styles.about__step_left : styles.about__step_right,
                )}
                key={`about-step-${index}`}
              >
                {index % 2 === 0 && (
                  <div className={styles.about__imgWrap}>
                    {step.images.map((image, index) => (
                      <Picture
                        key={`image-${index}`}
                        // attr={{className: styles.downloadApp__img}}
                        imgAttr={{
                          ...image.img,
                          className: classNames(styles.about__img, image.position && styles.about__img_abs),
                        }}
                        sourceData={image.sourceData}
                      />
                    ))}
                  </div>
                )}
                <div className={styles.about__info}>
                  <span className={styles.about__number}>{index + 1}.</span>
                  <p className={styles.about__text}>
                    {step.text}{" "}
                    {step.link && (
                      <a className={styles.about__text_red} href={step.link.href}>
                        {step.link.label}
                      </a>
                    )}
                  </p>
                </div>
                {index % 2 === 1 && (
                  <div className={styles.about__imgWrap}>
                    {step.images.map((image, index) => (
                      <Picture
                        key={`step-img-${index}`}
                        attr={{className: styles.about__img}}
                        imgAttr={image.img}
                        sourceData={image.sourceData}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
