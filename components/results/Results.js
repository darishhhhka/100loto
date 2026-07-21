import React, {useEffect} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Results.module.scss";
import Title from "@/components/title/Title";
import {results} from "@/constants/copyright";
import ResultCard from "@/components/resultCard/ResultCard";
import CustomButton from "@/components/customButton/CustomButton";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {MouseParallax} from "react-just-parallax";

export default function Results({className, children}) {
  const stars = [];

  for (let i = 0; i < 4; i++) {
    stars.push(
      <div className={classNames(styles[`results__star_${i}`], styles.results__bgItem)}>
        <MouseParallax isAbsolutelyPositioned strength={-0.01 * i}>
          <Picture imgAttr={{...results.star.imgAttr, className: styles.results__img}} />
        </MouseParallax>
      </div>,
    );
  }

  return (
    <section id="about" className={classNames(styles.results, className)}>
      <div className={styles.results__bg}>
        <div className={styles.results__patternImg}>
          <Picture imgAttr={results.imgPattern.img} />
        </div>
        <div className={classNames(styles.results__rocket, styles.results__bgItem)}>
          <MouseParallax isAbsolutelyPositioned strength={-0.01}>
            <Picture imgAttr={{...results.rocket.imgAttr, className: styles.results__img}} />
          </MouseParallax>
        </div>

        {stars}
      </div>
      <Title color="white">{results.title}</Title>
      <div className={styles.results__list}>
        {results.list.map((res, index) => (
          <ResultCard
            className={styles[`results__card_right_${index}`]}
            key={`result-card-${index}`}
            {...res}
            // img={res.image}
            // title={res.title}
            // subtitle={res.subtitle}
            // subtitleBold={res.subtitleBold}
            left={index === 3}
          />
        ))}
      </div>
      <CustomButton className={styles.results__btn}>{results.button.text}</CustomButton>
    </section>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
