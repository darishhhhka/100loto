import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./About.module.scss";
import Title from "@/components/title/Title";
import {about} from "@/constants/copyright";

export default function About({className, children}) {
  return (
    <section className={classNames(styles.about, className)}>
      <Title color="red">{about.title}</Title>
      <div>
        {about.steps.map((step, index) => (
          <div className={styles.about__step} key={`about-step-${index}`}>
            {index % 2 === 0 && (
              <div className={styles.about__imgWrap}>
                {step.img.map((image, index) => (
                  <img
                    className={classNames(styles.about__img, image.position && styles[`about__img_${image.position}`])}
                    key={`step-img-${index}`}
                    src={image.src}
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
                {step.img.map((img, index) => (
                  <img className={styles.about__img} {...img} />
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
