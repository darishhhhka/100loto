import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./About.module.scss";
import Title from "@/components/title/Title";
import {about} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";

export default function About({className, children}) {
  return (
    <section className={classNames(styles.about, className)}>
      <Title color="red">{about.title}</Title>
      <div className={styles.about__list}>
        {about.steps.map((step, index) => (
          <div
            className={classNames(
              styles.about__step,
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
    </section>
  );
}

About.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
