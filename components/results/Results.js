import React, {useEffect} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Results.module.scss";
import Title from "@/components/title/Title";
import {results} from "@/constants/copyright";
import ResultCard from "@/components/resultCard/ResultCard";
import CustomButton from "@/components/customButton/CustomButton";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Button from "@/components/button/Button";
import CustomParallax from "@/components/customParallax/CustomParallax";

export default function Results({className, children}) {
  const stars = [];

  for (let i = 0; i < 4; i++) {
    stars.push(
      <CustomParallax className={classNames(styles[`results__star_${i}`], styles.results__bgItem)}>
        <Picture imgAttr={{...results.star.imgAttr, className: styles.results__img}} />
      </CustomParallax>,
    );
  }

  return (
    <section className={classNames(styles.results, className)}>
      <div className={styles.results__bg}>
        <div className={styles.results__patternImg}>
          <Picture imgAttr={results.imgPattern.img} />
        </div>
        <CustomParallax className={styles.results__rocket}>
          <Picture imgAttr={{...results.rocket.imgAttr, className: styles.results__img}} />
        </CustomParallax>
        {stars}
      </div>
      <Title color="white">{results.title}</Title>
      <div className={styles.results__list}>
        {results.list.map((res, index) => (
          <ResultCard
            className={styles[`results__card_right_${index}`]}
            key={`result-card-${index}`}
            img={res.image}
            title={res.title}
            subtitle={res.subtitle}
            subtitleBold={res.subtitleBold}
            left={index === 3}
          />
        ))}
      </div>
      <CustomButton className={styles.results__btn}>
        <a className={styles.results__btnLink} href={results.button.href}>
          {results.button.text}
        </a>
      </CustomButton>
    </section>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
