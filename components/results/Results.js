import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Results.module.scss";
import Title from "@/components/title/Title";
import {results} from "@/constants/copyright";
import ResultCard from "@/components/resultCard/ResultCard";
import CustomButton from "@/components/customButton/CustomButton";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import Button from "@/components/button/Button";

export default function Results({className, children}) {
  return (
    <div className={classNames(styles.results, className)}>
      <div className={styles.results__rocket}>
        <Picture imgAttr={{...results.rocket, className: styles.results__rocketImg}} />
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
      <Button className={styles.results__btn}>Участвовать</Button>
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
